<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ General Description

The  MAX3905  evaluation  kit  (EV  Kit)  is  an  assembled demonstration  board that  provides  electrical  and  optical evaluation of the MAX3905 150Mbps Automotive VCSEL Driver.    All  output  current  settings  are  adjustable  by jumpers.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Component List

| DESIGNATION                     |   QTY | DESCRIPTION                                   |
|---------------------------------|-------|-----------------------------------------------|
| C1, C2                          |     2 | 0.047 µ F ± 10% ceramic capacitors (0402)     |
| C3-C5, C9                       |     4 | 0.1 µ F ± 10% ceramic capacitors (0402)       |
| C6                              |     1 | 0.1 µ F ± 10% ceramic capacitor (0603)        |
| C8                              |     1 | 0.47 µ F ± 10% ceramic capacitor (0603)       |
| C10, C11                        |     2 | Not Installed                                 |
| C22                             |     1 | 10 µ F tantalum capacitor                     |
| C23                             |     1 | 0.01 µ F ± 10% ceramic capacitor (0603)       |
| J1-J4                           |     4 | SMA connectors, tab contact, edge mount       |
| J18, J19, TP1- TP3, TP5, TP7    |     7 | Test points Digi-Key 5000K-ND                 |
| JP1, JP3, JP5 -JP13, JP16, JP17 |    13 | 2-pin headers, 0.1in centers                  |
| JP2                             |     1 | 3-pin + 1-pin header, 0.1in centers           |
| JP18                            |     1 | VCSEL (Not Installed)                         |
| L1                              |     1 | 1 H inductor Coilcraft 1008CS-102XKB          |
| R1, R11-R13                     |     4 | 49.9 Ω ± 1% resistors (1206)                  |
| R2, R5, R9                      |     3 | 49.9 Ω ± 1% resistors (0603)                  |
| R3                              |     1 | 16.2k Ω ± 1% resistor (0603)                  |
| R4                              |     1 | 29.4k Ω ± 1% resistor (0603)                  |
| R6                              |     1 | 10k Ω ± 1% resistor (0603)                    |
| R7                              |     1 | 4.99 Ω ± 1% resistor (0603)                   |
| R10                             |     1 | Not Installed                                 |
| U1                              |     1 | MAX3905* (packaged in 32 QFN for EV Kit only) |
| None                            |       | MAX3905 evaluation circuit board, rev A       |
| None                            |       | MAX3905 data sheet                            |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Features

- ♦ Fully Assembled and Tested
- ♦ Easy Selection of Operating Modes
- ♦ Includes 3-Pin Socket for VCSEL Insertion

* Note :  U1  has  an exposed  pad,  which  requires  it  to  be solder  attached  to  the  circuit  board  to  ensure  proper functionality of the part.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_ Ordering Information

| PART          | TEMP. RANGE           | IC PACKAGE   |
|---------------|-----------------------|--------------|
| MAX3905 EVKIT | -40 ° C to +140 ° C** | 32 QFN       |

**Junction Temperature for die; EV Kit materials should not be heated beyond 85 C.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 843-448-9411 | 843-448-1943 |
| Digi-Key   | 218-681-6674 | 218-681-3380 |
| Murata     | 770-436-1300 | 770-436-3030 |

Note: Please  indicate  that  you  are  using  the  MAX3905 when ordering from these suppliers.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Quick Start

## Electrical Evaluation

- 1) Connect a +3.3V or +5V supply to J19 and ground to J18.
- 2) Apply  10Mbps  to  50Mbps  data  to  IN\_TTL  (J1)  or 50Mbps to 150Mbps data to IN+ and IN- (J2 and J3).
- 3) If  TTL  data  is  applied,  leave  jumper  JP1  (DIFF) open.  If  differential  data  is  applied,  shunt  jumper JP1.
- 4) Shunt jumper JP3 to provide bias to the OUT pad.
- 5) Shunt  jumper  JP2  (3DB)  in  the    Normal  Power position.
- 6) Adjust  jumpers  JP5      JP13  to  change  the  output current as desired.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim s website at www.maxim-ic.com.

## MAX3905 Evaluation Kit

## Optical Evaluation

- 1) Connect a +3.3V or +5V supply to J19 and ground to J18.
- 2) Apply 10Mbps to 50Mbps data to IN\_TTL (J1) or 50Mbps to 150Mbps data to IN+ and IN- (J2 and J3).
- 3) If  TTL  data  is  applied,  leave  jumper  JP1  (DIFF) open.  If  differential  data  is  applied,  shunt  jumper JP1.
- 4) Replace  resistor R6  with  a  0 Ω resistor  and remove resistor R5 and capacitor C4.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 5) Solder a VCSEL at JP18, with the cathode of the VCSEL  in  the  hole  connected  to  R6  and  the anode in either of the two other holes. Components  R10  and  C10  may  be  installed  if necessary to compensate the VCSEL lead inductance.
- 6) Shunt jumper  JP2  (3DB) in the    Normal  Power position.
- 7) Adjust jumpers JP5   JP13 to change the output current as desired.

## Jumper and Test Point Descriptions

| NAME                                   | TYPE                 | SHUNT POSITION   | DESCRIPTION                                                                                                                |
|----------------------------------------|----------------------|------------------|----------------------------------------------------------------------------------------------------------------------------|
| DIFF (JP1)                             | 2-pin header         | OPEN             | Enables TTL data input IN_TTL                                                                                              |
| DIFF (JP1)                             | 2-pin header         | SHUNT (GND)      | Enables differential data inputs IN+ and IN-                                                                               |
| 3DB (JP2)                              | 3-pin + 1-pin header | OPEN             | Enables low power mode                                                                                                     |
| 3DB (JP2)                              | 3-pin + 1-pin header | NORMAL POWER     | Enables normal power mode                                                                                                  |
| 3DB (JP2)                              | 3-pin + 1-pin header | LOW POWER        | Connects 3DB pad to VCC with a 29.4k Ω resistor. Enables low power mode when 4.75V ≤ VCC ≤ 5.25V.                          |
| 3DB (JP2)                              | 3-pin + 1-pin header | NORMAL POWER 5V  | Connects 3DB pad to VCC with a 16.2k Ω resistor. Enables normal power mode when 4.75V ≤ VCC ≤ 5.25V.                       |
| JP3                                    | 2-pin header         | OPEN             | For electrical evaluation, a bias voltage 0.9V ≤ V BIAS ≤ VCC should be applied at this jumper to turn on the output stage |
| JP3                                    | 2-pin header         | SHUNT (VCC)      | Applies an output stage bias voltage of VCC                                                                                |
| DT01 and DT02 (JP5 and JP6)            | 2-pin headers        | OPEN             | Sets the DT0 bit low                                                                                                       |
| DT01 and DT02 (JP5 and JP6)            | 2-pin headers        | SHUNT (VCC)      | Sets the DT0 bit high                                                                                                      |
| MOD1 and MOD2 (JP8 and JP7)            | 2-pin headers        | OPEN             | Sets the MOD bit low                                                                                                       |
| MOD1 and MOD2 (JP8 and JP7)            | 2-pin headers        | SHUNT (VCC)      | Sets the MOD bit high                                                                                                      |
| TC1, TC2 and TC3 (JP9, JP10, and JP11) | 2-pin headers        | OPEN             | Sets the TC bit low                                                                                                        |
| TC1, TC2 and TC3 (JP9, JP10, and JP11) | 2-pin headers        | SHUNT (GND)      | Sets the TC bit high                                                                                                       |
| LOW1 and LOW2 (JP12 and JP13)          | 2-pin headers        | OPEN             | Sets the LOW bit low                                                                                                       |
| LOW1 and LOW2 (JP12 and JP13)          | 2-pin headers        | SHUNT (GND)      | Sets the LOW bit high                                                                                                      |
| SQEN (JP16)                            | 2-pin header         | OPEN             | Enables squelch                                                                                                            |
| SQEN (JP16)                            | 2-pin header         | SHUNT (GND)      | Disables squelch                                                                                                           |
| TEMPSENS (TP1)                         | Test Point           | -                | Monitors voltage on the TEMPSENS pad, corresponding to the junction temperature of the die.                                |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 1. MAX3905 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3905 Evaluation Kit

Figure 2. MAX3905 EV Kit Component Placement Guide   Component Side

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3905 Evaluation Kit

Figure 3.  MAX3905 EV Kit PC Board Layout   Component Side

<!-- image -->

Figure 4. MAX3905 EV Kit PC Board Layout   Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3905 Evaluation Kit

O

田

o

8

Figure 5. MAX3905 EV Kit PC Board Layout   Power Plane

<!-- image -->

Figure 6.  MAX3905 EV Kit PC Board Layout   Solder Side

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied.  Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

8