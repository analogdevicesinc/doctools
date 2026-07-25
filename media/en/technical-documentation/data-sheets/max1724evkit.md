<!-- lastmod 2022-08-02 -->
## General Description

The MAX1724 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that contains two separate boost switching-regulator circuits. The left-side circuit contains a MAX1724 with a preset 3.3V output. Other preset voltages of 2.7V, 3.0V, or 5.0V are also available. The right-side circuit contains a MAX1722, which has an adjustable output voltage. This circuit's output is set for 3.6V. All devices regulate with input voltages from 0.91V to VOUT, making them ideal for 1- or 2-cell alkaline and NiMH battery applications.

The right-side circuit may also be used to evaluate the MAX1723, which features a shutdown ( SHDN )  mode. The MAX1722/MAX1724 has a BATT pin, which lowers the guaranteed startup voltage from 1.2V to 0.91V.

The MAX1722/MAX1723/MAX1724 feature synchronous rectification and ultra-low (1.5µA typ) quiescent current for maximum efficiency and long battery life. Operation up to 200kHz allows tiny surface-mount components.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                    |
|---------------|-------|--------------------------------------------------------------------------------|
| C1-C4         |     4 | 10µF, 16V X7R ceramic capacitors TDK C3225X7R1C106MT or Murata GRM32DR71C106MA |
| D1            |     0 | Not installed                                                                  |
| L1, L2        |     2 | 10µH inductors Sumida CDR43-100MC                                              |
| R1            |     1 | 2M Ω ±1% resistor (0805) Venkel CR0805-10W-2004FT                              |
| R2            |     1 | 1.02M Ω ±1% resistor (0805) Venkel CR0805-10W-1024FT                           |
| U1            |     1 | Maxim MAX1724EZK33 (5-pin THIN SOT23, top mark ADQJ)                           |
| U2            |     1 | Maxim MAX1722EZK (5-pin THIN SOT23, top mark ADQF)                             |
| JU1, JU2      |     2 | 3-pin headers                                                                  |
| None          |     2 | Shunts JU1, JU2                                                                |
| None          |     1 | MAX1724 PC board                                                               |

Note: Quantities are for both circuits.

<!-- image -->

## Features

- ♦ 0.91V to VOUT Input Voltage Range
- ♦ Two Complete Boost Circuits 3.3V Fixed (MAX1724) 3.6V Adjustable Output (MAX1722)
- ♦ Up to 50mA Output from a 1-Cell Input Up to 100mA Output from a 2-Cell Input
- ♦ 1.5µA Quiescent Current from VOUT
- ♦ Up to 90% Efficiency with Synchronous Rectification
- ♦ Switching Frequency Up to 200kHz
- ♦ All Surface-Mount Design
- ♦ Fully Assembled and Tested Board

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX1724EVKIT | 0°C to +70°C | THIN SOT23-5 |

## Quick Start

The MAX1724 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

## 3.3V Output (left side):

- 1) Connect a 0.91V to 3.3V supply to the VBATT pad. Connect the supply ground to the GND pad.
- 2) Connect a voltmeter to the VOUT pad.
- 3) Verify there is a shunt across pins 1 and 2 of jumper JU1 ( SHDN ), thus enabling the MAX1724.
- 4) Turn on the power supply and verify that the output is at 3.3V.

## 3.6V Output (right side):

- 1) Connect a 0.91V to 3.6V supply to the VBATT pad. Connect the supply ground to the GND pad.
- 2) Connect a voltmeter to the VOUT pad.
- 3) Verify there is a shunt across pins 1 and 2 of jumper JU2 to connect BATT to VBATT for the MAX1722.
- 4) Turn on the power supply and verify that the output is at 3.6V.

For instructions on selecting feedback resistors for other output voltages, see Evaluating Other Output Voltages (Right Side) .

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX1724 Evaluation Kit

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          | WEBSITE               |
|------------|--------------|--------------|-----------------------|
| Murata     | 814-237-1431 | 814-238-0490 | www.murata.com        |
| Sumida     | 847-956-0666 | 847-956-0702 | www.sumida.com        |
| TDK        | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| Venkel     | 512-794-0081 | 512-794-0087 | www.venkel.com        |

Note: Please indicate that you are using the MAX1724 when contacting component suppliers.

## Detailed Description

The MAX1724 EV kit contains two separate boost switching-regulator circuits. The left-side circuit (MAX1724) supplies a preset 3.3V output. The rightside circuit (MAX1722) supplies an adjustable 3.6V output, but can also be set from 2.0V to 5.5V. Both circuits regulate with input voltages from 0.91V to VOUT, but can accept higher input voltages (below 5.5V) if it is acceptable for the output voltage to rise above the set VOUT. Output current for both circuits is 50mA with a 1.2V input, and 100mA for a 2.4V input.

The 3.6V output voltage (right side) can also be adjusted from 2.0V to 5.5V using external resistors R1 and R2. The input voltage ranges from 0.91V to (VOUT) when operating from a DC source.

The MAX1724 boost converter (left side) features a 0.1µA shutdown mode.

## Jumper Selection

## MAX1724 Circuit (Left Side)

The MAX1724 EV kit's shutdown mode reduces the IC's quiescent current to 0.1µA (typ), preserving battery life. Jumper JU1 selects the shutdown mode for the MAX1724. Table 1 lists the MAX1724 jumper options.

## Table 1. MAX1724 Jumper JU1 Functions

| SHUNT LOCATION   | SHDN PIN           | MAX1724 OUTPUT                          |
|------------------|--------------------|-----------------------------------------|
| 1-2              | Connected to VBATT | MAX1724 enabled, V OUT = 3.3V           |
| 2-3              | Connected to GND   | Shutdown mode, V OUT = V BATT - V DIODE |

## MAX1722 Circuit (Right Side)

When jumper JU2 on the right-side circuit is used with a MAX1722, pins 1 and 2 must be connected together so that  BATT is connected to the battery input (VBATT). When the right-side circuit is used to evaluate a MAX1723, see Evaluating the MAX1723 section. Table 2 lists the MAX1722 jumper options.

## Table 2. MAX1722 Jumper JU2 Functions

| SHUNT LOCATION   | BATT PIN           |
|------------------|--------------------|
| 1-2              | Connected to VBATT |
| 2-3              | Not allowed        |

## 3.6V Output (right side):

- 1) Connect a 0.91V to 3.6V supply to the VBATT pad. Connect the supply ground to the GND pad.
- 2) Connect a voltmeter to the VOUT pad.
- 3) Verify there is a shunt across pins 1 and 2 of jumper JU2 to connect BATT to VBATT for the MAX1722.
- 4) Turn on the power supply and verify that the output is at 3.6V.

For instructions on selecting feedback resistors for other output voltages, see Evaluating Other Output Voltages (Right Side) .

## Evaluating Other Output Voltages (Right Side)

The MAX1722 output is set to 3.6V by feedback resistors R1 and R2. To generate output voltages other than 3.6V (2.0V to 5.5V), select different external voltagedivider resistors (R1, R2). Refer to the Setting the Output Voltage section in the MAX1722/MAX1723/ MAX1724 data sheet for instructions on selecting R1 and R2 for the MAX1722/MAX1723.

## Evaluating the MAX1723

The MAX1723 can be evaluated using the MAX1722 circuit (right side). Replace the MAX1722 with a MAX1723EZK. Diode D1 (Motorola MBR0520L or equiv-

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 1. MAX1724 EV Kit Left-Side Circuit Schematic

<!-- image -->

alent) may be necessary for low-voltage startup. Refer to  the  Low-Voltage Startup Oscillator section in the MAX1722/MAX1723/MAX1724 data sheet for additional instructions on selecting D1.

The MAX1723 circuit features a shutdown mode that reduces current to 0.1µA (typ), preserving battery life. Jumper JU2 selects the MAX1723 shutdown mode. Table 3 lists the MAX1723 jumper options.

<!-- image -->

## MAX1724 Evaluation Kit

Figure 2. Right-Side Circuit Schematic for MAX1722 and MAX1723 Evaluation

<!-- image -->

## Table 3. MAX1723 Jumper JU2 Functions

| SHUNT LOCATION   | SHDN PIN           | MAX1723 OUTPUT                          |
|------------------|--------------------|-----------------------------------------|
| 1-2              | Connected to VBATT | MAX1723 enabled, V OUT = 3.6V           |
| 2-3              | Connected to GND   | Shutdown mode, V OUT = V BATT - V DIODE |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1724 Evaluation Kit

<!-- image -->

Figure 3. MAX1724 EV Kit Component Placement GuideComponent Side

Figure 4. MAX1724 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX1724 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600