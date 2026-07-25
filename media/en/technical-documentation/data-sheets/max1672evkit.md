<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX1672 evaluation kit (EV kit) integrates a stepup switching converter with a linear-regulator output to provide step-up/down voltage conversion. It accepts a 1.8V to 11V input and converts it to a 3.3V or 5V output for  currents  up  to  300mA.  The  EV  kit  is  optimized  for battery applications where the input varies above and below the regulated output voltage. It provides ultra-low quiescent current and high efficiency for maximum battery life. Another benefit of the low-dropout linear postregulator is that it reduces high-frequency ripple.

The MAX1672 EV kit is a fully assembled and tested surface-mount circuit board. With minimal modification, it  can  also  be  used  to  evaluate  other  output  voltages. Additional pads on the board accommodate external feedback resistors for setting different output voltages.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION    |   QTY | DESCRIPTION                                                                             |
|----------------|-------|-----------------------------------------------------------------------------------------|
| C1, C2         |     2 | 100µF, 16V, low-ESR tantalum capacitors AVX TPSE107M016R0100 or Sprague 593D107X0016E2W |
| C3, C5, C6, C7 |     4 | 0.1µF ceramic capacitors                                                                |
| C4             |     1 | 10µF, 10V tantalum capacitor Sprague 595D106X0010A2T                                    |
| D1             |     1 | 1A, 30V Schottky diode Motorola MBRS130LT3 or International Rectifier 10BQ40            |
| L1             |     1 | 10µH inductor Sumida CD54-100                                                           |
| R1-R4          |     0 | Not installed                                                                           |
| R5             |     1 | 1M Ω , 5% resistor                                                                      |
| U1             |     1 | MAX1672EEE (QSOP-16)                                                                    |
| JU1-JU4        |     4 | 3-pin headers                                                                           |
| None           |     4 | Shunts                                                                                  |
| None           |     1 | MAX1672 PC board                                                                        |
| None           |     1 | MAX1672 data sheet                                                                      |

<!-- image -->

| ____________________________Features ' Step-Up/Down Voltage Conversion   | Evaluates:   |
|--------------------------------------------------------------------------|--------------|
| ' 1.8V to 11V Input Range                                                |              |
| ' 3.3V or 5V Selectable Output Voltage                                   |              |
| ' Adjustable Output Voltage (1.25V to 5.5V)                              |              |
| ' Load Disconnects from Input in Shutdown                                |              |
| ' Up to 300mA Output Current                                             |              |
| ' No External FETs Required                                              |              |
| ' 0.1µA Typical IC Shutdown Current                                      |              |
| ' Low-Battery Comparator                                                 |              |
| ' 16-Pin QSOP Package                                                    |              |
| (same footprint as 8-pin SO)                                             | MAX1672      |
| ' Surface-Mount Components                                               |              |
| ' Fully Assembled and Tested                                             |              |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART         | TEMP. RANGE   | BOARD TYPE    |
|--------------|---------------|---------------|
| MAX1672EVKIT | 0°C to +70°C  | Surface Mount |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER                | PHONE          | FAX            |
|-------------------------|----------------|----------------|
| AVX                     | (803) 946-0690 | (803) 626-3123 |
| Coilcraft               | (708) 639-6400 | (708) 639-1469 |
| Coiltronics             | (561) 241-7876 | (561) 241-9339 |
| Dale-Vishay             | (402) 564-3131 | (402) 563-6418 |
| International Rectifier | (310) 322-3331 | (310) 322-3332 |
| Motorola                | (602) 303-5454 | (602) 994-6430 |
| Sprague                 | (603) 224-1961 | (603) 224-1430 |
| Sumida                  | (708) 956-0666 | (708) 956-0702 |
| Vishay/Vitramon         | (203) 268-6261 | (203) 452-5670 |

Note: Please indicate that you are using the MAX1672 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 408-737-7600 ext. 3468.

## MAX1672 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX1672 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a +1.8V to +11V supply voltage to the VIN pad. Connect ground to the GND pad.
- 2) Connect a voltmeter to the VOUT pad.
- 3) Verify that all other shunts are across pins 1 and 2 of jumpers JU1-JU4.
- 4) Turn on the power supply and verify that the output voltage is 3.3V. For a 5V output, remove the shunt from JU1 pins 1 and 2, and place it across pins 2 and 3.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX1672 EV kit integrates a step-up switching converter with a linear-regulator output to provide stepup/down voltage conversion. It accepts a 1.8V to 11V input and converts it to a 3.3V or 5V output for currents up to 300mA. The MAX1672 combines a linear regulator,  boost  switching  regulator,  N-channel  power  MOSFET, P-channel pass element, reference, and low-battery comparator in a single, space-saving, 16-pin QSOP package. The EV kit is shipped configured for a 3.3V output.

## Jumper Selection

The 3-pin header JU1 selects the output voltage. Table 1 lists the selectable jumper options. The 3-pin header JU2 selects the current limit. Table 2 lists the selectable jumper options. The EV kit is shipped configured for ILIM = 0.8A.

## Table 1. Jumper JU1 Functions

| SHUNT LOCATION   | 3/ 5 PIN         | MAX1672 OUTPUT   |
|------------------|------------------|------------------|
| 1 & 2            | Connected to V+  | V OUT = 3.3V     |
| 2 & 3            | Connected to GND | V OUT = 5V       |

## Table 2. Jumper JU2 Functions

| SHUNT LOCATION   | ILIM PIN         | CURRENT LIMIT   |
|------------------|------------------|-----------------|
| 1 & 2            | Connected to V+  | I LIM = 0.8A    |
| 2 & 3            | Connected to GND | I LIM = 0.5A    |

## Shutdown Mode

The MAX1672 EV kit features a shutdown mode that preserves battery life by reducing quiescent current to less than 1µA max. During shutdown, the reference, low-battery comparator, and all feedback and control circuitry  are  turned  off.  In  shutdown,  the  output  of  the boost converter drops to within a Schottky diode drop below the input, and the linear-regulator output is turned off and pulled to 0V.

The 3-pin headers JU3 and JU4 select the shutdown mode. When ONA = 1 or ONB = 0, the MAX1672 is on. When ONA = 0 and ONB = 1, the MAX1672 shuts down. For normal operation, connect ONA to V+ and ONB to  GND. Table 3 lists the selectable jumper options.

## Table 3. Jumpers JU3 and JU4 Functions

| ONA PIN                         | ONB PIN                         | MAX1672 OUTPUT                      |
|---------------------------------|---------------------------------|-------------------------------------|
| Connected to GND, JU4 = 2 and 3 | Connected to GND, JU3 = 2 and 3 | MAX1672 enabled, V OUT = 3.3V or 5V |
| Connected to GND, JU4 = 2 and 3 | Connected to V+, JU3 = 1 and 2  | Shutdown mode, V OUT = 0V           |
| Connected to V+, JU4 = 1 and 2  | Connected to GND, JU3 = 2 and 3 | MAX1672 enabled, V OUT = 3.3V or 5V |
| Connected to V+, JU4 = 1 and 2  | Connected to V+, JU3 = 1 and 2  | MAX1672 enabled, V OUT = 3.3V or 5V |

## Power-Good Output

The MAX1672 has an on-chip comparator for low-battery detection. If the voltage at the PGI input falls below 1.25V (REF), the open-drain comparator output PGO goes high. The PGI input is connected to an external resistor-divider, R3 and R4, which sets the low-battery detector threshold.

Refer to the Low-Battery Detection section of the MAX1672 data sheet for instructions on selecting resistors R3 and R4.

## Other Output Voltages

The MAX1672 EV kit can also be used to evaluate other output voltages in the 1.25V to 5.5V range. Simply cut the PC trace shorting resistor R2 and refer to the Output Voltage Selection section in the MAX1672 data sheet for instructions on selecting feedback resistors R1 and R2. Place the shunt across pins 2 and 3 of JU1.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 1.  MAX1672 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1672 Evaluation Kit

<!-- image -->

Figure 2.  MAX1672 EV Kit Component Placement GuideComponent Side

Figure 3.  MAX1672 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4.   MAX1672 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600