<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ General Description

The  MAX3982  evaluation  kit  (EV  Kit)  is  an  assembled demonstration board that provides electrical evaluation of the  MAX3982  SFP  Copper-Cable  Preemphasis  Driver. All control inputs are adjustable by jumpers, and LOS is available through a test point.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Component List

| DESIGNATION       |   QTY | DESCRIPTION                              |
|-------------------|-------|------------------------------------------|
| C1                |     1 | 33 µ F tantalum capacitor                |
| C2, C3, C8        |     3 | 0.1 µ F ± 10% ceramic capacitors (0402)  |
| C4 - C7           |     4 | 0.01 µ F ± 10% ceramic capacitors (0402) |
| J1-J4             |     4 | SMA connectors, tab contact, edge mount  |
| J6, J10, TP1 TP3  |     5 | Test points Digi-Key 5000K-ND            |
| JU1 JU3, JU5, JU6 |     5 | 2-pin headers, 0.1in centers             |
| JU4               |     1 | 3-pin header, 0.1in centers              |
| JU1 JU6           |     6 | Shunts                                   |
| L1                |     1 | 4.7 H inductor Coilcraft 1008CS-472XJB   |
| R1                |     1 | 4.7k Ω ± 5% resistor (0402)              |
| U1                |     1 | MAX3982UTE 16-pin QFN                    |
| None              |       | MAX3982 evaluation circuit board, rev A  |
| None              |       | MAX3982 data sheet                       |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Features

- ♦ Fully Assembled and Tested
- ♦ Easy Selection of Operating Modes

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_ Ordering Information

| PART          | TEMP. RANGE      | IC PACKAGE   |
|---------------|------------------|--------------|
| MAX3982 EVKIT | 0 ° C to +85 ° C | 16 QFN       |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 843-448-9411 | 843-448-1943 |
| Digi-Key   | 218-681-6674 | 218-681-3380 |
| Murata     | 770-436-1300 | 770-436-3030 |

Note: Please  indicate  that  you  are  using  the  MAX3982 when ordering from these suppliers.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Quick Start

- 1) Connect  a  +3.3V  supply to the  +3.3V terminal  and ground to GND.
- 2) Install shunt at jumper JU4 in  ENABLE  position to enable the output.
- 3) Apply  1Gbps to  4.25Gbps  data  to IN+  and  IN-  (J1 and J2).
- 4) Connect  OUT+  and  OUT-  to  a  50  ohm-terminated oscilloscope.
- 5) Shunt  JU5  (LOS  PULLUP)  to  terminate  the  LOS output with 4.7k Ω to VCC.
- 6) Adjust  pre-emphasis  with  jumpers  JU2  and  JU3 (PE1 and PE0).
- 7) Select output amplitude with jumper JU1 (OUTLEV).
- 8) Monitor LOS output at TP1 and select LOS sensitivity with JU6 (LOSLEV).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX3982 Evaluation Kit

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Jumper and Test Point Descriptions

| NAME             | TYPE         | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                          |
|------------------|--------------|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| OUTLEV (JU1)     | 2-pin header | OPEN             | Selects maximum output swing                                                                                                                                                         |
| OUTLEV (JU1)     | 2-pin header | SHUNT (GND)      | Selects reduced output swing                                                                                                                                                         |
| PE1 (JU2)        | 2-pin header | OPEN             | Enables most significant bit of pre-emphasis control                                                                                                                                 |
| PE1 (JU2)        | 2-pin header | SHUNT (GND)      | Disables most significant bit of pre-emphasis control                                                                                                                                |
| PE0 (JU3)        | 2-pin header | OPEN             | Enables least significant bit of pre-emphasis control                                                                                                                                |
| PE0 (JU3)        | 2-pin header | SHUNT (GND)      | Disables least significant bit of pre-emphasis control                                                                                                                               |
| TX_DISABLE (JU4) | 3-pin header | OPEN             | Disables data output                                                                                                                                                                 |
| TX_DISABLE (JU4) | 3-pin header | ENABLE           | Enables data output                                                                                                                                                                  |
| TX_DISABLE (JU4) | 3-pin header | AUTO             | Enables autodetect by connecting LOS to TX_DISABLE. JU5 must be shunted or an external voltage (3.0V to 5.5V) must be present on pin 1 of JU5 for proper operation of autodetect.    |
| LOS PULLUP (JU5) | 2-pin header | OPEN             | Allows external voltage (3.0V to 5.5V) applied at pin 1 of JU5 as LOS pullup voltage                                                                                                 |
| LOS PULLUP (JU5) | 2-pin header | SHUNT (VCC)      | Sets VCC as the LOS resistor pullup voltage                                                                                                                                          |
| LOSLEV (JU6)     | 2-pin header | OPEN             | Sets LOS threshold to lower sensitivity (higher threshold)                                                                                                                           |
| LOSLEV (JU6)     | 2-pin header | SHUNT (GND)      | Sets LOS threshold to higher sensitivity (lower threshold)                                                                                                                           |
| LOS (TP1)        | Test Point   | -                | Monitors the Loss-of-Signal output. LOS will be low when the input signal level is valid and JU5 is either shunted or an external voltage (3.0V to 5.5V) is present at pin 1 of JU5. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3982 Evaluation Kit

Figure 1. MAX3982 EV Kit Schematic

<!-- image -->

Figure 2. MAX3982 EV Kit Component Placement Guide   Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3982 Evaluation Kit

Figure 3.  MAX3982 EV Kit PC Board Layout   Component Side, Layer 1

<!-- image -->

Figure 4. MAX3982 EV Kit PC Board Layout   Ground Plane, Layer 2

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3982 Evaluation Kit

Figure 5. MAX3982 EV Kit PC Board Layout   Power Plane, Layer 3

<!-- image -->

Figure 6.  MAX3982 EV Kit PC Board Layout   Bottom, Layer 4

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied.  Maxim reserves the right to change the circuitry and specifications without notice at any time.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA 94086 408-737-7600