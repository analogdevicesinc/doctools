<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX767 evaluation kit (EV kit) is a fully assembled and tested printed circuit board for Maxim's synchronous, step-down power-supply controller. Providing a tightly  regulated  3.3V  output  voltage  from  a  5V  input source, the EV kit contains two separate, complete circuits  with  conversion efficiencies greater than 90%. The first all-surface-mount circuit can drive loads up to 1.5A, and the second circuit can drive loads up to 5A.

<!-- image -->

## MAX767 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ♦ Fixed 3.3V Output Voltage ±4%
- ♦ Up to 1.5A and 5A Output Currents
- ♦ 120µA Standby Supply Current
- ♦ 700µA Quiescent Supply Current
- ♦ 300kHz Switching Frequency
- ♦ More than 90% Efficiency
- ♦ 20-Pin Shrink-Small-Outline Package
- ♦ Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART           | TEMP. RANGE   | BOARD TYPE    |
|----------------|---------------|---------------|
| MAX767EVKIT-SO | 0°C to +70°C  | Surface Mount |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_EV Kit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX767 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION      |   QTY | DESCRIPTION                                                               |
|------------------|-------|---------------------------------------------------------------------------|
| C101             |     1 | 47µF, 16V low-ESR tantalum capacitor AVX TPSD476K016R0150                 |
| C106, C206       |     2 | 0.22µF ceramic capacitors Murata-Erie GRM42-6X7R224K050                   |
| C103, C203       |     2 | 0.1µF ceramic capacitors                                                  |
| C201, C202, C207 |     3 | 220µF, 10V low-ESR aluminum electrolytic capacitors Sanyo OS-CON 10SA220M |
| C102             |     1 | 220µF, 6.3V low-ESR tantalum capacitor Sprague 595D227X06R3D2B            |
| C105, C205       |     2 | 0.01µF ceramic capacitors                                                 |
| C104, C204       |     2 | 4.7µF, 16V tantalum capacitors Sprague 595D475X0016A2B                    |
| D102             |     1 | 1A, 20V Schottky (1N5817) NIEC EC10QS02 Motorola MBRS120T3                |
| D202             |     1 | 3A, 20V Schottky (1N5820) NIEC NSQ03A02 Motorola MBRS340T3                |
| D101, D201       |     2 | SOT-23 diodes Central Semiconductor CMPSH-3                               |
| L101             |     1 | 10µH, 1.5A inductor Sumida CDR74B-100                                     |
| L201             |     1 | 3.3µH, 5A inductor CoilCraft DO3316-332                                   |
| N101             |     1 | N-channel MOSFET (SO-8) Motorola MMDF3N03HD or Siliconix Si9936DY         |
| N201, N202       |     2 | N-channel MOSFETs (DPAK) Motorola MTD20N03HDL or Harris RFD16N05L         |
| R101             |     1 | 0.040 Ω , 1% resistor (SMT) IRC LR2010-01-R040-F DD WSL-2010-R040F        |
| R102, R202       |     2 | 10 Ω resistors                                                            |
| R201 (2 options) |     1 | 0.012 Ω , 1% resistor (SMT) DD WSL-2512-R012F                             |
| R201 (2 options) |     2 | 0.025 Ω , 1% resistor (SMT) IRC LR2010-01-R025-F                          |
| U1, U2           |     2 | MAX767CAP ICs                                                             |
| JU101, JU201     |     2 | 3-pin header                                                              |
| None             |     2 | Shunt                                                                     |
| None             |     1 | PC board                                                                  |
| None             |     1 | MAX767 data sheet                                                         |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER              | PHONE                     | FAX          |
|-----------------------|---------------------------|--------------|
| AVX                   | 803-946-0690 800-282-4975 | 803 626-3123 |
| Central Semiconductor | 516-435-1110              | 516-435-1824 |
| Coilcraft             | 847-639-6400              | 847-639-1469 |
| Coiltronics           | 561-241-7876              | 561-241-9339 |
| DD                    | 402-564-3131              | 402-563-6418 |
| Harris                | 407-727-9100 800-442-7747 | 407-724-3973 |
| IRC                   | 512-992-7900              | 512-992-3377 |
| Motorola              | 602-303-5454              | 602-994-6430 |
| Murata-Erie           | 800-831-9172 814-237-1431 | 814-238-0490 |
| NIEC (QMI*)           | 805-867-2555              | 805-867-2698 |
| Sanyo USA             | 619-661-6835              | 619-661-1055 |
| Siliconix             | 408-988-8000              | 408-970-3950 |
| Sprague               | 603-224-1961              | 603-224-1430 |
| Sumida                | 847-956-0666              | 847-956-0702 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Operating Procedure

The MAX767 EV kit is a fully assembled and tested board. The following procedure verifies board operation for both 1.5A and 5A configurations.

## Do not turn on the power supply until all connections are completed.

1. Connect a 5V supply to the pad marked VIN.  The ground connects to the GND pad.
2. Connect a voltmeter and load (if any) to the VOUT pad.
3. Place the shunt on JU101 and JU201 across pins 2 and 3 for normal operation.
4. Turn on the power and verify that the output voltage is 3.3V.

## Table 1. Jumper JU101/JU201 Functions

| JUMPER       | CONNECTION   | FUNCTION                                                                              |
|--------------|--------------|---------------------------------------------------------------------------------------|
| JU101/ JU201 | 1 & 2        | Output disabled; V OUT = 0V                                                           |
| JU101/ JU201 | 2 & 3        | Output enabled; V OUT = 3.3V                                                          |
| JU101/ JU201 | OPEN         | Output enabled if pin 3 (ON) is connected to VCC; disabled if ON is connected to GND. |

## MAX767 Evaluation Kit

## Jumper Selection

The 3-pin header JU101/JU201 selects shutdown mode.  Table 1 lists the selectable jumper options.

## Output Noise

MAX767 output noise is typically less than 50mV peakto-peak.  Small erroneous voltage spikes seen when the MOSFETs switch are the result of improper oscilloscope-probe grounding.  EMI radiated from the circuit is  picked  up  by  the  loop  from  the  probe  tip  to  the probe ground.  Ground noise may also cause a measurement error due to the voltage difference from the output capacitor ground lead to the probe ground connection.

To reduce or eliminate these errors, use the oscilloscope-probe grounding technique shown in Figure 1. The probe is placed directly across the output capacitor,  with  its  ground  ring  contacting  the  ground lead of the output capacitor.  The normal probe ground lead is not connected to the circuit.

<!-- image -->

Figure 1.  Noise Measurement

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX767 Evaluation Kit

Figure 2.  MAX767 1.5A Circuit

<!-- image -->

Figure 3.  MAX767 5A Circuit

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX767 Evaluation Kit

<!-- image -->

Figure 4.  MAX767 EV Kit Component Placement Guide (Component Side)

<!-- image -->

Figure 5.  MAX767 EV Kit PC Layout (Component Side)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX767 Evaluation Kit

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600

<!-- image -->