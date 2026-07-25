<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX887 evaluation kit (EV kit) provides a 3.3V output voltage from a +3.5V to +11V input. It delivers up to 600mA and operates with up to 100% duty cycle for low dropout voltage. Typical efficiencies are 93%. The MAX887 features a low-current (2.5µA typ) shutdown mode, as well as current-mode operation for superior load and line response. Cycle-by-cycle current limiting protects the internal MOSFET and rectifier.

This EV kit is a fully assembled and tested surfacemount circuit board. It can be used to evaluate other output  voltages  by  changing  feedback  resistors  R1 and R2.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                               |
|---------------|-------|---------------------------------------------------------------------------|
| C1, C2        |     2 | 47µF, 16V tantalum capacitors AVX TPSD47M016R0150 Sprague 593D476X0016D2W |
| C3            |     1 | 0.33µF ceramic capacitor                                                  |
| C4            |     1 | 2.2µF, 20V tantalum capacitor Sprague 595D225X0020A2T                     |
| C5            |     1 | 0.047µF ceramic capacitor                                                 |
| C6            |     1 | 100pF ceramic capacitor                                                   |
| C7            |     0 | Open                                                                      |
| D1            |     1 | Schottky diode Motorola MBRS130T3 Nihon EC10QS02                          |
| JU1, JU2      |     2 | 3-pin headers                                                             |
| L1            |     1 | 33µH inductor Sumida CD54-330                                             |
| R1            |     1 | 165k Ω , 1% resistor                                                      |
| R2            |     1 | 100k Ω , 1% resistor                                                      |
| U1            |     1 | MAX887HESA                                                                |
| None          |     2 | Shunts                                                                    |
| None          |     1 | MAX887 PC board                                                           |
| None          |     1 | MAX887 data sheet                                                         |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER        | PHONE                         | FAX            |
|-----------------|-------------------------------|----------------|
| AVX             | (803) 946-0690 (800) 282-4975 | (803) 626-3123 |
| Coilcraft       | (847) 639-6400                | (847) 639-1469 |
| Motorola        | (602) 303-5454                | (602) 994-6430 |
| Nihon           | (805) 867-2555                | (805) 867-2698 |
| Sprague         | (603) 224-1961                | (603) 224-1430 |
| Sumida          | (847) 956-0666                | (847) 956-0702 |
| Vishay/Vitramon | (203) 268-6261                | (203) 452-5670 |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' 3.3V Output Voltage
- ' 600mA Output Current
- ' Efficiency = 93%, VIN = 5V, VOUT = 3.3V @ IOUT = 0.2A
- ' Low Dropout Voltage
- ' 100% Max Duty Cycle
- ' Internal MOSFET
- ' Internal Synchronous Rectifier
- ' 5µA Max Shutdown Current
- ' 300kHz Switching Frequency
- ' 8-Pin SO, Surface-Mount Construction
- ' Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART           | TEMP. RANGE   | BOARD TYPE    |
|----------------|---------------|---------------|
| MAX887EVKIT-SO | 0°C to +70°C  | Surface Mount |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX887 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a +5V supply voltage to the VIN pad. The ground connects to the GND pad.
- 2) Connect a voltmeter and load, if any, to the VOUT pad.
- 3) For normal operation, place the shunt on JU1 across pins 2 and 3.
- 4) Turn on the power supply to the board, and verify that the output voltage is 3.3V. (To select other output voltages, refer to the Output Voltage Selection section in the MAX887 data sheet for instructions on selecting feedback resistors R1 and R2.)

Figure 1.  MAX887 EV Kit Schematic

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX887 provides a 3.3V output from a +3.5V to +11V input voltage. It delivers up to 500mA, and operates with up to 100% duty cycle for low dropout voltage. Other output voltages can be programmed by changing  feedback resistor R1. R1 is given by the following equation:

<!-- formula-not-decoded -->

where R2 = 100k and VFB = 1.25V

The 3-pin header JU1 selects shutdown mode. Table 1 lists the selectable jumper options. In shutdown, the internal switching MOSFET and synchronous rectifier turn off and the output voltage falls to 0V. Connect the SHDN pin to VIN for normal operation.

The 3-pin header JU2 selects synchronization mode. Table 2 lists the selectable jumper options.

To avoid RF interference with sensitive IF and dataacquisition circuits, a SYNC pad is provided on the board for  synchronization to an external clock. When SYNC is connected to GND, Idle Mode™ operation is enabled and the MAX887 is placed in PFM mode at light loads. PFM

Idle Mode is a trademark of Maxim Integrated Products.

operation improves efficiency and reduces quiescent current typically to 200µA. When SYNC is connected to VL, forced PWM operation is enabled. PWM operation reduces noise in sensitive communications applications. Refer to the Forced PWM and Idle Mode Operation section in the MAX887 data sheet for more information.

## Table 1.  Jumper JU1 Functions

| SHUNT LOCATION   | SHDN PIN         | MAX887 OUTPUT               |
|------------------|------------------|-----------------------------|
| 1 & 2            | Connected toGND  | Shutdown mode, VOUT = 0V    |
| 2 & 3            | Connected to VIN | MAX887 enabled, VOUT = 3.3V |

## Table 2.  Jumper JU2 Functions

| SHUNT LOCATION   | SYNC PIN                          | OPERATING MODE                                                |
|------------------|-----------------------------------|---------------------------------------------------------------|
| 1 & 2            | Connected toGND                   | Idle mode, PFM; I QUIESCENT = 200µA                           |
| 2 & 3            | Connected to VL                   | Low-noise, fixed-frequency PWM operation; I QUIESCENT = 2.7mA |
| Open             | Connected to an external SYNC pad | Synchronization to an external clock                          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX887 Evaluation Kit

Figure 2.  MAX887 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3.  MAX887 EV Kit PC Board Layout-Component Side

<!-- image -->

<!-- image -->

Figure 4.  MAX887 PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX887 Evaluation Kit

NOTES

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600

© 1996 Maxim Integrated Products