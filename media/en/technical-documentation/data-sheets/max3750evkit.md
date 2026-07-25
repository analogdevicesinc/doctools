<!-- lastmod 2022-08-02 -->
## General Description

The MAX3750 evaluation kit (EV kit) simplifies evaluation of the MAX3750/MAX3751 port bypass ICs. It provides impedance transformation networks that allow interface with standard 50 Ω test equipment.

This fully assembled and tested EV kit includes a jumper to facilitate signal flow selection, and a calibration circuit that allows accurate jitter measurement.

## Component List

| DESIGNATION                                          |   QTY | DESCRIPTION                            |
|------------------------------------------------------|-------|----------------------------------------|
| C1-C10, C13-16                                       |    14 | 0.1µF, 25V min, 10% ceramic capacitors |
| C11                                                  |     1 | 2.2µF, 25V min, 10% ceramic capacitor  |
| C12                                                  |     1 | 33µF ±10%, 16V min tantalum capacitor  |
| J1                                                   |     1 | 3-pin header (0.1" center)             |
| J2-J13                                               |    12 | SMA connectors (edge mount)            |
| L1                                                   |     1 | 56nH inductor                          |
| None                                                 |     1 | Shunt for J1                           |
| R1, R2, R4, R5, R7, R8, R10, R11, R13, R14, R16, R18 |    12 | 43.2 Ω , 1% resistors                  |
| R3, R6, R9, R12, R15, R17                            |     6 | 178 Ω , 1% resistors                   |
| VCC, GND                                             |     1 | 2-pin headers                          |
| U1                                                   |     1 | MAX3750CEE or MAX3751CEE (16 QSOP)     |
| None                                                 |     1 | MAX3750/MAX3751 circuit board          |
| None                                                 |     1 | MAX3750/MAX3751 data sheet             |

<!-- image -->

Features

- ' Interfaces with 50 Ω Systems
- ' Fully Assembled and Tested
- ' Calibration Circuit for Accurate Jitter Measurement

## Ordering Information

| PART         | TEMP. RANGE   | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX3750EVKIT | 0°C to +70°C  | 16 QSOP      |

Note: To evaluate the MAX3751, order the MAX3750EVKIT and a sample of the MAX3751.

## Component Supplier

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 803-946-0690 | 803-626-3123 |

Note: Please indicate that you are using the MAX3750 or MAX3751 when contacting this component supplier.

## Quick Start

To evaluate the MAX3750 or MAX3751 input-to-output signal path:

- 1)    Connect a differential signal source to the input at IN+, IN-. Set the signal amplitude to 500mVp-p. The input signal can have a data rate up to 1Gbps for the MAX3751 and 2.1Gbps for the MAX3750.
- 2) Connect OUT+ and OUT- through 50 Ω matched impedance cables to a 50 Ω oscilloscope.
- 3)  Connect a +3.3V supply to the VCC terminal, and a ground to the GND terminal.
- 4) Shunt pins 1 and 2 on J1 to select the IN to OUT signal path.
- 5)  Ensure that the differential signal at the oscilloscope is between 425mV and 690mV.

1

## MAX3750 Evaluation Kit

## Input and Output Impedance Conversion

For convenient interface with standard test equipment, the MAX3750 EV kit is equipped with impedance transforming resistive networks on its inputs (50 Ω to  75 Ω ) and outputs (75 Ω to 50 Ω ). The impedance transforming networks also introduce signal attenuation. The input signal is attenuated by a factor of 0.64, and the output signal is attenuated by a factor of 0.43. For example, a differential  signal  of  600mV applied to the input terminals of the MAX3750 EV kit will produce a differential input signal of 381mV across the IC's input pins. If a differential  signal  of  225mV  is  observed  at  the  output terminals of the EV kit, then the actual output of the IC is a differential signal of 600mV.

Figure 1.  MAX3750 EV Kit Schematic

| CONTROL   | SHUNT BETWEEN PINS   | SELECT              |
|-----------|----------------------|---------------------|
| J1        | 1-2                  | Connects IN to OUT  |
| J1        | 2-3                  | Connects LIN to OUT |

Table 1.  Connections, Adjustments, and Controls

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 2.  MAX3750 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX3750 Evaluation Kit

Figure 3.  MAX3750 EV Kit Component Placement GuideSolder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3750 Evaluation Kit

Figure 4.  MAX3750 EV Kit PC Board Layout-Ground Plane

<!-- image -->

Figure 5.  MAX3750 EV Kit PC Board Layout-Power Plane

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600