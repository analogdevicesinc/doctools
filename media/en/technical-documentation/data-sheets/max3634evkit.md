<!-- lastmod 2022-08-02 -->
<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Features

The  MAX3634 evaluation  kit  (EV  kit)  provides  electrical evaluation of the MAX3634 burst-mode phase aligner IC. The EV kit has SMA connectors for all high-speed inputs and outputs to simplify connection to test equipment.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Component List

| DESIGNATION                                     |   QTY | DESCRIPTION                               |
|-------------------------------------------------|-------|-------------------------------------------|
| C1, C2, C35                                     |     3 | 2.2 μ F ± 10% ceramic capacitors (0805)   |
| C3-C29, C31, C32, C36                           |    30 | 1000pF ± 10% ceramic capacitors (0402)    |
| C30, C34, C38, C42                              |     4 | 0.1 μ F ± 10% ceramic capacitors (0402)   |
| C33, C37, C41                                   |     3 | 33 μ F ± 10% tantalum capacitors (B Case) |
| J1, J2, J4, J25, TP2, TP13-TP15,                |     8 | Test points                               |
| J6-J9, J13-J20                                  |    12 | SMA connectors (edge-mount)               |
| J21-J24                                         |     0 | Not installed                             |
| JU1                                             |     1 | 2-pin header, 0.1in centers               |
| JU3                                             |     1 | 3-pin header, 0.1in centers               |
| JU3                                             |     1 | Shunt                                     |
| L1, L11, L12                                    |     3 | 56nH ± 5% inductors                       |
| R1, R2, R4, R5, R9-R11, R14, R17, R18, R21, R22 |    12 | 0 Ω ± 5% resistors (0402)                 |
| R3, R6, R23-R25                                 |     5 | Not installed, resistors                  |
| R7, R8, R12, R13, R15, R16                      |     6 | 51 Ω ± 1% resistors (0201)                |
| R19, R20, R26- R29                              |     0 | Not installed, resistors                  |
| U1                                              |     1 | MAX3634ETM (48-pin QFN)                   |
| -                                               |     1 | MAX3634 EV kit PC board                   |
| -                                               |     1 | MAX3634 data sheet                        |
| -                                               |     1 | MAX3634 EV kit data sheet                 |

- ♦ Easy +3.3V Power-Supply Operation
- ♦ Fully Assembled and Tested
- ♦ PECL Terminations Included

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART         | TEMP RANGE     | IC PACKAGE   |
|--------------|----------------|--------------|
| MAX3634EVKIT | -40°C to +85°C | 48-Pin QFN   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 843-444-2863 | 843-626-3123 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Digi-Key   | 218-681-6674 | 218-681-3380 |
| EF Johnson | 402-474-4800 | 402-474-4858 |
| Murata     | 415-964-6321 | 415-964-8165 |

Note: Indicate that you are using the MAX3634 when ordering from these suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Quick Start

## Electrical Evaluation (Data from Lab Equipment)

- 1) Set  VCC  =  2.0V,  VEE  =  -1.3V,  and  V\_PECL  = 0V.
- 2) Connect RATESEL to VCC for 622Mbps operation or to VEE for 1.244Gbps operation.
- 3) Set source levels (for SDI, RST, and REFCLK) to VHigh = +1V and VLow = +0.7V.
- 4) Apply  a  reference  clock  to  the  REFCLK  inputs (J19 and J20) at 1/8 th the data rate.
- 5) Apply SDI data to J6 and J7 SMA connectors.
- 6) Apply RST signal to J8 and J9.
- 7) Connect  the  SDO  and  SCLKO  outputs  to  50 Ω test  equipment.    Note  that  the  output  high  level may be as high as 1.12V, so attenuators may be required before connecting to an oscilloscope.
- 8) Due  to resistive drops in the supply-filtering network, the voltage applied to the MAX3634 will be  lower  than  what  is  applied  to  the  board. Therefore,  verify  that  there  is  2V  at  TP13  and -1.3V at TP14.

## Interfacing to the MAX3634 PECL Inputs and Outputs

The  MAX3634  EV  kit  has  a  VPECL  connection  that allows  easy  connection  to  PECL  sources  as  well  as lab sources. Figure 1 shows several different possible configurations that can be selected depending upon the requirements of the test setup.

The MAX3634 PECL inputs (SDI±, RST±, REFCLK±) can  accept  a  wide  range  of  input  amplitudes  and common-mode levels.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Jumpers and Test Points

| COMPONENT   | NAME    | FUNCTION                                                                                                                     |
|-------------|---------|------------------------------------------------------------------------------------------------------------------------------|
| J2          | VEE     | Connection for the VEE voltage supply                                                                                        |
| J1          | GND     | Connection for the GND voltage supply                                                                                        |
| J4          | VCC     | Connection for the VCC voltage supply                                                                                        |
| J25         | VPECL   | Connection for the VPECL voltage supply                                                                                      |
| JU3         | RATESEL | Used to configure rate of operation for the MAX3634. Connect to VCC for 622Mbps operation and to VEE for 1.244Gbps operation |
| TP2         | VPECL   | Test point for monitoring VPECL                                                                                              |
| TP14        | VEE     | Test point for monitoring VEE at the MAX3634                                                                                 |
| TP13        | VCC     | Test point for monitoring VCC at the MAX3634                                                                                 |
| TP15        | GND     | Test point for monitoring GND                                                                                                |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 1.  MAX3634 EV Kit Configurations

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX3634 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 3. MAX3634 EV Kit Component Placement Guide -Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 4.  MAX3634 EV Kit PC Board Layout -Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 5.  MAX3634 EV Kit PC Board Layout -Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 6.  MAX3634 EV Kit Component Placement Guide -Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_