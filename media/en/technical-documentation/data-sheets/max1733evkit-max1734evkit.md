<!-- lastmod 2022-08-04 -->
## General Description

The MAX1734 evaluation kit (EV kit) is a fully assembled and tested surface-mount PC board that contains a switching-regulator circuit configured for a +1.8V output. At  up  to  250mA,  it  accepts  inputs  from  a  +2.7VDC  to +5.5VDC source or a 1-cell lithium-ion (Li+) or 2- to 3-cell battery.

The MAX1734 features an internal P-channel MOSFET switch, a synchronous rectifier, logic-controlled shutdown, and digital soft-start to limit startup current. The MAX1734 EV kit provides low quiescent current and efficiency up to 93%, providing maximum battery life. High-frequency operation up to 1.2MHz with a maximum duty cycle of 100% allows the use of tiny surfacemount components. The EV kit can also evaluate the MAX1733 after modifications.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                             |
|---------------|-------|-----------------------------------------------------------------------------------------|
| C1            |     1 | 2.2µF, 10V X5R ceramic capacitor Taiyo Yuden LMK325BJ106MN or Taiyo Yuden LMK212BJ225MG |
| C2            |     1 | 22µF, 6.3V tantalum capacitor AVX TAJA226M006R                                          |
| JU1           |     1 | 3-pin header                                                                            |
| L1            |     1 | 10µH inductor Sumida CR43-100MC                                                         |
| R1, R2        |     0 | Not installed                                                                           |
| U1            |     1 | MAX1734EUK18 (5-pin SOT23, top mark ADKW)                                               |
| None          |     1 | Shunt                                                                                   |
| None          |     1 | MAX1734 PC board                                                                        |
| None          |     1 | MAX1734 data sheet                                                                      |
| None          |     1 | MAX1734 EV kit manual                                                                   |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          |
|-------------|--------------|--------------|
| AVX         | 803-946-0690 | 803-626-3123 |
| Sumida USA  | 847-956-0666 | 847-956-0702 |
| Taiyo Yuden | 408-573-4150 | 408-573-4159 |

Note: Please indicate that you are using the MAX1734 when contacting these component suppliers.

- ♦ +2.7V to +5.5V Battery Input Voltage
- ♦ +1.8V Output Voltage
- ♦ 250mA Output Current
- ♦ Efficiency &gt;85% from 2mA to 250mA
- ♦ Internal P-Channel Switch and Synchronous Rectifier
- ♦ 0.01µA (typ) IC Shutdown Current
- ♦ 50µA Quiescent Supply Current
- ♦ Up to 1.2MHz (max) Switching Frequency
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE   | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX1734EVKIT | 0°C to +70°C  | 5 SOT23      |

## Quick Start

The MAX1734 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Connect a +2.7V (for guaranteed startup) to +5.5V supply to the VIN pad. Connect the supply ground to the GND pad.
- 2) Connect a voltmeter to the VOUT pad.
- 3) Verify that the shunt is across pins 1 and 2 on JU1, thus enabling the MAX1734.
- 4) Turn on the power supply and verify that the output is at +1.8V.

For instructions on selecting the feedback resistors for other output voltages, see Evaluating Other Output Voltages .

## Detailed Description

The MAX1734 EV kit contains a highly efficient switchingregulator circuit. The circuit provides a +1.8V output at 250mA from a +2.7V to +5.5V input voltage range. Digital soft-start limits current during startup.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For price, delivery, and to place orders, please contact Maxim Distribution at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

## Features

## MAX1734 Evaluation Kit

## Jumper Selection (Shutdown Mode)

The MAX1734 EV kit features a shutdown mode that reduces the MAX1734 quiescent current below 5µA (max), preserving battery life. The 3-pin header, JU1, selects the shutdown mode for the circuit. Table 1 lists the selectable jumper options.

## Evaluating Other Output Voltages

The output is set to +1.8V by shorting the feedback pin (FB/OUT) to VOUT. This is the default setting for the MAX1734 EV kit. To generate output voltages other than +1.8V (+1.25V to +2.0V), the MAX1734EUK18 must be replaced with a different output MAX1734 or the MAX1733EUK. When using a MAX1733, cut the PC board trace to the mounting pads of R1, and select the external voltage-divider resistors (R1, R2). Refer to the Setting the Output Voltage section in the MAX1733 data sheet for instructions on selecting R1 and R2.

## Table 1. Jumper JU1 Functions

Figure 1. MAX1734 EV Kit Schematic

| SHUNT LOCATION   | SHDN PIN         | MAX1734 OUTPUT                 |
|------------------|------------------|--------------------------------|
| 1, 2             | Connected to VIN | MAX1734 enabled, V OUT = +1.8V |
| 2, 3             | Connected to GND | Shutdown mode, V OUT = 0       |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX1734 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX1734 EV Kit PC Board Layout-Component Side

<!-- image -->

## MAX1734 Evaluation Kit

Figure 3. MAX1734 EV Kit Component Placement GuideSolder Side

<!-- image -->

Figure 5. MAX1734 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3