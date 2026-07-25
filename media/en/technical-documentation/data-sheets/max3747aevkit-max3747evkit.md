<!-- lastmod 2022-08-04 -->
<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## \_\_\_\_\_\_\_ General Description

The  MAX3747/3747A  evaluation  kit  (EV  kit)  simplifies evaluation  of  the  MAX3747/3747A  limiting  amplifiers. The EV kit enables testing  of  all  the  device's  functions. SMA connectors with 50 Ω controlled-impedance transmission  lines  to  the  MAX3747/3747A  are  provided for all input and output ports.

The  EV  kit  provides  input  and  output  test  points  and jumpers for all TTL signals.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Component List

| DESIGNATION       |   QTY | DESCRIPTION                            |
|-------------------|-------|----------------------------------------|
| C4, C14, C15      |     3 | 0.1 µ F 10% Ceramic Capacitor (0402)   |
| C6- C13           |     8 | 0.1 µ F 10% Ceramic Capacitor (0201)   |
| C3                |     1 | 0.1 µ F 10% Ceramic Capacitor (0603)   |
| C1                |     1 | 33 µ F 10% Tantalum Capacitor (B CASE) |
| C2                |     1 | 10 µ F 10% Tantalum Capacitor (B CASE) |
| C5                |     1 | 100pF 10% Ceramic Capacitor (0201)     |
| C16               |     1 | OPEN                                   |
| D1                |     1 | LED                                    |
| J10-J11, TP1- TP4 |     6 | Test Point DIGIKEY 5000K- ND           |
| J1-J8             |     8 | SMA EDGE MOUNT, Round Contact          |
| J9                |     1 | SMB PC MOUNT                           |
| JU1               |     1 | Jumper Block 3 pins + 1 0.1'           |
| JU2, JU3          |     2 | Jumper Block 3 pins 0.1'               |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Features

- ♦ Independent Input and Output Voltage Terminations
- ♦ SMA Connectors for All High-Speed Inputs and Outputs
- ♦ Test Points for LOS Output
- ♦ Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_ Ordering Information

| PART TEMP. RANGE                       | IC PACKAGE   |
|----------------------------------------|--------------|
| MAX3747/3747A EVKIT -40 ° C to +85 ° C | 10 µ MAX     |

## \_\_\_\_\_\_\_\_\_\_\_\_ Component List (cont.)

| DESIGNATION   |   QTY | DESCRIPTION                                 |
|---------------|-------|---------------------------------------------|
| L1            |     1 | 47nH Inductor                               |
| Ro, R1        |     2 | 49.9 Ω , 1% resistor (0402)                 |
| R10           |     1 | 442 Ω , 1% resistor (0402)                  |
| R11           |     1 | 4.53k Ω , 1% resistor (0402)                |
| R12           |     1 | 2.37k Ω , 1% resistor (0402)                |
| R13           |     1 | 768 Ω , 1% resistor (0402)                  |
| R2            |     1 | 5k Ω , variable resistor BOURNS 3296W-1-502 |
| R3, R4        |     2 | OPEN                                        |
| R5            |     1 | 4.75k Ω , 1% resistor (0402)                |
| R6            |     1 | 10.0k Ω , 1% resistor (0402)                |
| R8            |     1 | 4.99k Ω , 1% resistor (0402)                |
| R9            |     1 | 2.61k Ω , 1% resistor (0402)                |
| U1            |     1 | MAX3747/MAX3747AEUB                         |
| U2            |     1 | SMT 0.5 pitch SMT dipswitch (8 position)    |
| U3            |     1 | MAX4429ESA                                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## MAX3747/MAX3747A Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_ Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| Digi-Key   | 218-681-6674 | 218-681-3380 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Murata     | 814-237-1431 | 814-238-0490 |
| AVX        | 803-946-0690 | 803-626-3123 |

Note: Please indicate that you are using the MAX3747/MAX3474A when ordering from these suppliers.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Quick Start

- 1) Shunt  the  center  pin  of  JU1  to  TP3  to  connect DISABLE to LOS.
- 2) Shunt  the  center  pin  of  JU2  to  4.75k Ω .    Shunt  the center pin of JU3 to VCC.  This terminates LOS to VCC through a 4.75k Ω resistor.
- 3) Turn all positions of the dipswitch (U2) off.  Turn the 4 and 5 switch to on.  This sets the minimum LOS threshold.
- 4) Connect a +3.3V supply to VCC (J10).  Connect the power supply ground to J11 (GND).
- 5) Connect  a  100mVP-P  2.125Gbps  signal  to  J1  (IN+) and J2 (IN-)
- 6) Connect J3  (OUT+)  and  J4  (OUT-)  to  a  50 Ω highspeed oscilloscope.    The differential output of  the MAX3747  should  be  500mVP-P.    The  differential output of the MAX3747A should be 800mVP-P.

2\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Dipswitch

The dipswitch allows for quick setting of various threshold levels.    When  only  switch  4  and  5  are  turned  on,  the MAX3747/MAX3747A are set to the low threshold level. Switch 3 and 6 sets to the medium threshold level, and switch 2 and 7 sets to the high threshold level.  Switch 1 and 8 connect the potentiometer allowing the user to set any threshold level.

## Jumper JU1

Jumper JU1 allows the user to connect the DISABLE pin to LOS, VCC, or GND

## Jumper JU2

Jumper JU2 allows the user to terminate the LOS output to 4.75k Ω or 10.0k Ω .

## Jumper JU3

Jumper JU3 connects the LOS termination resistor or to a separate supply connected to TP4.

## MAX3747/MAX3747A Evaluation Kit

Figure 1. MAX3747/MAX3747A EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## MAX3747/MAX3747A Evaluation Kit

Figure 2. MAX3747/MAX3747A EV Kit PC Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX3747/MAX3747A EV Kit PC Component Placement Guide-Solder Side

<!-- image -->

4\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

.

## MAX3747/MAX3747A Evaluation Kit

Figure 3. MAX3747/MAX3747A EV Kit PC Component Guide-Ground Plane

<!-- image -->

Figure 4. MAX3747/MAX3747A EV Kit PC Component Guide-Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3747/MAX3747A Evaluation Kit

<!-- image -->

Figure 6. MAX3747/MAX3747A EV Kit PC Component Guide-Solder Side

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product.  No circuit patent licenses are implied.  Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

.

6