<!-- lastmod 2022-08-02 -->
19-

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX849 evaluation kit (EV kit) is an assembled and tested  PC  board  that  implements  a  complete,  one-cell to  three-cell,  high-power,  low-noise,  step-up  DC-DC power  converter  that's  ideal  for  portable  phones  and other  battery-operated  equipment.  With  a  3.3V  output voltage, use one or two cells to get a 250mA to 700mA output current. With a 5V output voltage, use three cells or  one  lithium-ion  (Li-Ion)  battery  to  get  an  850mA  output current.

The  board  includes  clips  for  a  standard  AA-size  battery, and provides a 10-pin header for user interfacing.

To  evaluate  the  MAX848,  order  a  free  sample  of  the MAX848ESE along with the MAX849 EV kit.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION     | QTY   | DESCRIPTION                                       |
|-----------------|-------|---------------------------------------------------|
| BAT1            | 2     | Battery clips Keystone 92                         |
| C1              | 1     | 0.22µF ceramic capacitor                          |
| C2, C3          | 2     | 0.1µF ceramic capacitors                          |
| C4, C5          | 2     | 4.7nF ceramic capacitors                          |
| CF1, CF2        | 2     | 100µF, 6V, 0.1ESR capacitors AVX TPSD107M010R0100 |
| CF3             | 0     | Open                                              |
| CI1             | 1     | 22µF, 6V, low-ESR capacitor AVX TPSD226M025R0200  |
| CI2             | 0     | Open                                              |
| D1              | 1     | 0.5A, 20V Schottky diode Motorola MBR0520L        |
| J1              | 1     | 10-pin header                                     |
| JU1             | 1     | 2-pin header                                      |
| JU2             | 1     | 3-pin header                                      |
| L1              | 1     | 10µH, 1.65A, 4.5mm inductor Sumida CDR74B-100     |
| R1              | 1     | 10 Ω , 5% resistor                                |
| R2              | 1     | 61.9k Ω , 1% resistor                             |
| R3              | 2 0   | Battery clips Keystone 92 Open                    |
| R4, R11         | 2     | 1k Ω , 5% resistors                               |
| R5              | 1     | 6.81k Ω , 1% resistor                             |
| R6, R7, R9, R10 | 4     | 1M Ω , 5% resistors                               |
| R8              | 1     | 100k Ω , 5% resistor                              |
| U1              | 1     | Maxim MAX849ESE                                   |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ♦ 250mA to 850mA Output Current!
- ♦ 90% Efficiency
- ♦ Proven PC Board Layout
- ♦ Fully Assembled and Tested
- ♦ 2-Channel Analog-to-Digital Converter (ADC) with Serial Output for Voltage Monitoring

|   V IN (V) |   V OUT (V) |   I OUT (mA) |
|------------|-------------|--------------|
|        1.2 |         3.3 |          250 |
|        2.4 |         3.3 |          700 |
|        2.4 |         5.0 |          500 |
|        3.6 |         5.0 |          850 |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART           | TEMP. RANGE   | BOARD TYPE    |
|----------------|---------------|---------------|
| MAX849EVKIT-SO | 0°C to +70°C  | Surface Mount |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

This  section  describes  how  to  operate  the  MAX849  EV kit,  and  how  to  evaluate  its  performance. Do not turn on the power supply until all connections are completed.

- 1) Configure  the  jumper  and  resistor  settings  as desired.  For  a  standard  3.3V  output  and  90% power-OK threshold, close jumper JU1 (Table 1).
- 2) Insert  an  AA-size  battery  cell  into  the  battery  clips. Or, connect a 1V to 3V DC power supply to the VIN and  GND  input  pads.  Turn  on  the  power  supply. Quiescent supply current for the board with no load should be less than 1mA.
- 3) The  EV  kit  board  turns  on  automatically,  and  VOUT goes to 3.3V.
- 4) To operate in high-power PWM mode at a particular frequency  between  200kHz  and  400kHz,  leave  JU2 open  and  drive  the  CLK/SEL  pin  with  pulses  at  the desired frequency. Or, let the MAX849 determine its own  PWM  frequency  by  connecting  JU2  1-2.  To operate in low-power PFM mode, connect JU2 2-3.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800

## MAX849 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Evaluating the MAX848

To  evaluate  the  MAX848,  first  replace  U1  with  a MAX848ESE. Then remove filter capacitor CF2, replace input  capacitor  CI1  with  10µF,  and  replace  L1  with  a 22µH,  800mA  inductor.  Table  2  lists  recommended component changes for MAX848 evaluation.

## Reading the Analog-to-Digital Converter (ADC)

The  MAX849's  internal  ADC  produces  a  pulse  train  on the  DOUT  pin,  at  the  CLK/SEL  switching  frequency. Pulses are skipped in proportion to the selected analog input.

One  way  to  read  a  value  from  the  ADC  is  to  use  a microcontroller's  (µC's)  pulse  accumulator  or  counter/ timer.  With  the  MAX849's  DOUT  incrementing  the counter,  clear  it  and  latch  its  value  after  256  CLK/SEL pulses.  The  counter's  value  will  be  proportional  to  the analog input voltage.

If  the  MAX849  is  operated  in  free-running  PWM  mode (JU2 = 1-2), then the µC must sense the pulse frequency  so  it  can  sample  DOUT  for  the  correct  period  of time. Use the LX output to measure the MAX849's internal frequency.

If  the  MAX849  is  operated  in  synchronized  PWM  mode (JU2  =  open  and  CLK/SEL  driven  externally),  then  the µC  should  use  the  CLK/SEL  pulses  to  time  the  DOUT sampling period.

The  ADC  is  not  active  when  CLK/SEL  is  driven  low (JU2 = 2-3).

## Setting VOUT and POK Thresholds

When  VOUT is  in  regulation,  FB  =  1.25V,  and  when VOUT falls  to  its  trip  threshold,  POKIN  drops  to  1.25V. Select R3, R5, and R2 by the following method:

VOUT = Nominal output voltage

VTRIP = Desired POK trip threshold

I BIAS = Desired resistor bias current, at least 10µA

VREF = 1.25V

R2 = VREF / IBIAS

R5 = R2 (VOUT - VTRIP) / VTRIP

R3 = (R2 + R5) [(VTRIP / VREF) - 1]

To set VOUT = 5.0V, set R3 to 178k Ω (do not connect or disconnect JU1 or R3 while the power is on).

2

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 1. Jumper Function Table

| JUMPER   | STATE            | FUNCTION                                           |
|----------|------------------|----------------------------------------------------|
| JU1      | Open             | VOUT and POK set by R3, R5, and R2.                |
| JU1      | Closed (default) | 3.3V, 10% trip threshold                           |
| JU2      | 1-2              | Low-noise PWM mode. CLK/SEL pin is tied to V OUT . |
| JU2      | Open             | PWM synchronized to user- supplied CLK/SEL signal. |
| JU2      | 2-3 (default R9) | Low-power PFM mode. CLK/SEL pin is tied to GND.    |

Table 2. Recommended Component Changes for MAX848 Evaluation

| DESIGNATION   |   QTY | FUNCTION                                                                      |
|---------------|-------|-------------------------------------------------------------------------------|
| CF2           |     0 | Open                                                                          |
| CI1           |     1 | 10µF, 6V, low-ESR capacitor AVX TPSD106M035R0300 (10µF, 35V, 0.300 Ω max ESR) |
| L1            |     1 | 22µH, 800mA inductor Sumida CD54-220 (22µH, 1.11A, 0.18 Ω )                   |
| U1            |     1 | MAX848ESE                                                                     |

## MAX849 Evaluation Kit MAX849 Evaluation Kit

Figure 1.  MAX849 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## MAX849 Evaluation Kit

Figure 3.  MAX849 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4.  MAX849 EV Kit PC Board Layout-Solder Side

Maxim  cannot  assume  responsibility  for  use  of  any  circuitry  other  than  circuitry  entirely  embodied  in  a  Maxim  product.  No  circuit  patent  licenses  are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600