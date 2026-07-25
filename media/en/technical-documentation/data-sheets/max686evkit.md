<!-- lastmod 2022-08-02 -->
## General Description

The MAX686 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that contains two separate switching-regulator circuits. The first circuit converts a +0.8V to +18V battery voltage to a +18V LCD bias voltage for currents up to 20mA. The second circuit  converts  a  +0.8V  to  +12V  battery  voltage  to  a

- -17V voltage for currents up to 20mA.

The MAX686 requires a +2.7V to +5.5V supply at VIN, but the inductor can be powered from as low as +0.8V. The device features an internal N-channel MOSFET switch, programmable current limit, and internal 6-bit DAC for digital adjustment of the output voltage. The MAX686 EV kit provides low quiescent current and high efficiency for maximum battery life. Operation up to 300kHz allows the use of a tiny surface-mount inductor.

## Ordering Information

| PART        | TEMP. RANGE   | IC PACKAGE   |
|-------------|---------------|--------------|
| MAX686EVKIT | 0°C to +70°C  | 16 QSOP      |

| DESIGNATION           |   QTY | DESCRIPTION                                                                   |
|-----------------------|-------|-------------------------------------------------------------------------------|
| C1, C8                |     2 | 15µF, 35V tantalum capacitors AVX TPSD156M035R0300 or Sprague 593D156X0035E2W |
| C2                    |     1 | 4.7µF, 35V tantalum capacitor AVX TPSC475M035R0600 or Sprague 595D475X0035C   |
| C3                    |     1 | 1µF ceramic capacitor                                                         |
| C4, C5, C11, C12, C13 |     5 | 0.1µF ceramic capacitors                                                      |
| C6                    |     1 | 2.2µF, 25V ceramic capacitor United Chemi-Con/Marcon THCR30E1E225Z            |
| C7                    |     1 | 22pF ceramic capacitor                                                        |
| C9                    |     1 | 2.2µF, 35V tantalum capacitor AVX TAJB225M035R or Sprague 595D225X0035B       |
| C10                   |     1 | 100pF ceramic capacitor                                                       |
| D1, D2, D3            |     3 | Schottky diodes Motorola MBR0540T1                                            |

<!-- image -->

## MAX686 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' Output Voltage:
- +18V Typical Positive Output (or +12.6V to
- +24V adjustable with up/down)
- -17V Typical Negative Output (or -22.7V to
- -11.4V adjustable with up/down)
- ' Battery Input Voltage:
- +0.8V to +18V (Positive Output)
- +0.8V to +12V (Negative Output)
- ' +2.7V to +5.5V VIN Supply Range
- ' Up to 20mA Output Current
- ' 6-Bit DAC-Controlled Output Voltage
- ' Internal 0.5A, 28V N-Channel Switch
- ' 1.3µA IC Shutdown Current
- ' Up to 300kHz Switching Frequency
- ' Surface-Mount Components
- ' Fully Assembled and Tested

## Component List

| DESIGNATION              |   QTY | DESCRIPTION                    |
|--------------------------|-------|--------------------------------|
| D4                       |     0 | Not installed                  |
| L1, L2                   |     2 | 22µH inductors Sumida CD54-220 |
| R1, R9                   |     2 | 1M Ω , 1%resistors             |
| R2, R3, R10, R11         |     4 | 110k Ω , 1% resistors          |
| R4, R5, R16, R17, Q1     |     0 | Not installed                  |
| R6, R7, R8, R12 R13, R14 |     6 | 100k Ω , 5% resistors          |
| R15                      |     1 | 2 Ω , 5% resistor              |
| R18                      |     1 | 100 Ω , 5% resistor            |
| U1, U2                   |     2 | MAX686EEE                      |
| JU1, JU4                 |     2 | 3-pin headers                  |
| JU2, JU3, JU5, JU6       |     4 | 2-pin headers                  |
| None                     |     2 | Shunt                          |
| None                     |     1 | MAX686 PC board                |
| None                     |     1 | MAX686 data sheet              |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 408-737-7600 ext. 3468.

## MAX686 Evaluation Kit

## Component Suppliers

| SUPPLIER                 | PHONE          | FAX            |
|--------------------------|----------------|----------------|
| AVX                      | (803) 946-0690 | (803) 626-3123 |
| Coilcraft                | (708) 639-6400 | (708) 639-1469 |
| Coiltronics              | (561) 241-7876 | (561) 241-9339 |
| Dale-Vishay              | (402) 564-3131 | (402) 563-6418 |
| Motorola                 | (602) 303-5454 | (602) 994-6430 |
| Sprague                  | (603) 224-1961 | (603) 224-1430 |
| Sumida                   | (708) 956-0666 | (708) 956-0702 |
| United Chemi-Con/ Marcon | (847) 696-2000 | (847) 696-9278 |
| Vishay/Vitramon          | (203) 268-6261 | (203) 452-5670 |

Note: Please indicate that you are using the MAX686 when contacting these component suppliers.

## Quick Start

The MAX686 EV kit is fully assembled and tested. Follow these steps to verify board operation. VIN and VBATT are separated on each circuit to demonstrate operation of VBATT down to +0.8V. VIN and VBATT can be connected together and to a single supply from +2.7V to +5.5V via jumpers JU3 and JU6. Do not turn on the power supply until all connections are completed.

## Positive Output

- 1) Connect a +2.7V to +5.5V supply to the VIN pad, and connect a +0.8V to +18V supply to the VBATT pad. Connect the grounds to the GND pads.
- 2) Connect a voltmeter and load, if any, to the VOUT pad.
- 3) Place the shunt on JU1 across pins 2 and 3.
- 4) Turn on the power supplies and verify that the output voltage is typically +18V.

## Negative Output

- 1) Connect a +2.7V to +5.5V supply to the VIN pad, and connect a +0.8V to +12V supply to the VBATT pad. Connect the grounds to the GND pads.
- 2) Connect a voltmeter and load, if any, to the -VOUT pad.
- 3) Place the shunt on JU4 across pins 2 and 3.
- 4) Turn on the power supplies and verify that the output voltage is typically -17V.

For instructions on selecting the feedback resistors for other output voltages, refer to the Setting the Output Voltage section in the MAX686 data sheet.

## Detailed Description

The MAX686 EV kit contains two separate switchingregulator circuits. The first circuit provides an +18V output for  currents  up  to  20mA  with  90%  typical  conversion efficiency. The second circuit provides a -17V output voltage for currents up to 20mA with 82% typical conversion efficiency. Both output voltages can be adjusted with the internal 6-bit DAC. Each output can be controlled by logic signals applied to the UP/DN pads.

## Output Voltage Control

The output voltage is set with the combination of a voltage divider and a summing resistor from DACOUT. The 6-bit DAC is controlled with an up/down counter via the UP and DN pins. This EV kit has the UP and DN pins connected to ground via 100k Ω resistors (R7, R8, R13, R14). On power-up, the output voltage is set to midscale. A rising edge on UP increases the output voltage; a rising edge on DN decreases the output voltage. Holding both UP and DN high resets the output voltage to  mid-scale. Refer to the section Setting the Output Voltage in the MAX686 data sheet for more information on controlling the MAX686 output voltage.

## Controlling the LCD Using POK and LCDON

LCDON can be used to turn on a positive LCD bias voltage when VBATT is above the desired threshold. A resistor-divider (R16-R17) from VBATT to POK controls the open-drain output LCDON ,  which  pulls  low  when VPOK &gt; 1.125V.

LCDON can drive an external PNP transistor, Q1, switching a positive VOUT to the LCD. The EV kit provides additional pads for Q1, R4, and R5. Choose a PNP with low saturation voltage at the required load current.

R4 limits the base current in Q1. R5 is used to turn off Q1 when LCDON is  floating.  R4  and  R5  can  be  the same value. Refer to the section Controlling the LCD Using POK and LCDON in the MAX686 data sheet for instructions on selecting resistors R4, R5, R16, and R17.

## Jumper Selection

## Shutdown Mode

The MAX686 EV kit features a shutdown mode that reduces the MAX686's quiescent current to 1.5µA (typical),  preserving battery life. The 2-pin header JU1 selects the shutdown mode for the positive output, while JU4 selects the shutdown mode for the negative output. Tables 1 and 2 list the selectable jumper options.

## Current Limit

The 2-pin header JU2 selects the current limit for the positive output circuit, while JU3 selects the current limit for the negative output. Table 3 lists the selectable jumper options. The MAX686 EV kit comes configured for a 500mA current limit.

## Table 1. Jumper JU1 Functions (Positive Output)

| SHUNT LOCATION   | SHDN PIN         | MAX686 OUTPUT                          |
|------------------|------------------|----------------------------------------|
| 1 & 2            | Connected to GND | Shutdown mode V OUT = V BATT - V DIODE |
| 2 & 3            | Connected to VIN | MAX686 enabled, V OUT = +18V           |

<!-- image -->

## MAX686 Evaluation Kit

Table 2. Jumper JU4 Functions (Negative Output)

| SHUNT LOCATION   | SHDN PIN         | MAX686 OUTPUT                |
|------------------|------------------|------------------------------|
| 1 & 2            | Connected to GND | Shutdown mode, V OUT = 0V    |
| 2 & 3            | Connected to VIN | MAX686 enabled, V OUT = -17V |

Table 3. Jumpers JU2 and JU3 Functions

| SHUNT LOCATION   | ISET PIN         |   CURRENT LIMIT (mA) |
|------------------|------------------|----------------------|
| On               | Connected to GND |                  250 |
| Off              | Connected to VIN |                  500 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 1a.  MAX686 EV Kit Positive Output Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 1b.  MAX686 EV Kit Negative Output Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX686 Evaluation Kit

Figure 2. MAX686 EV Kit Component Placement Guide

<!-- image -->

Figure 3. MAX686 EV Kit PC Board Layout-Component Side

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 4. MAX686 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX686 Evaluation Kit

NOTES

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

© 1998 Maxim Integrated Products