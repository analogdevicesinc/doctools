<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ General Description

The MAX3841 DC-coupled evaluation kit (EV kit) simplifies  evaluation  of  the  MAX3841  12.5Gbps  2 × 2 CML crosspoint switch. The EV kit enables testing of all the MAX3841  functions. SMA  connectors with  50 Ω controlled-impedance transmission lines to the MAX3841 are provided for all CML inputs and outputs. The board includes additional transmission lines for calibration purposes.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION                                            |   QTY | DESCRIPTION                               |
|--------------------------------------------------------|-------|-------------------------------------------|
| C1, C7, C13, C22, C27, C30                             |     6 | 33 µ F ± 10% tantalum capacitors (B case) |
| C2, C8, C12, C14, C26, C29                             |     6 | 2.2 µ F ± 10% ceramic capacitors (0805)   |
| C3, C4, C6, C9, C10, C11, C16, C17, C23, C24, C25, C28 |    12 | 0.01 µ F ± 10% ceramic capacitors (0201)  |
| C5, C15, C18-C21                                       |     6 | 0.1 µ F ± 10% ceramic capacitors (0402)   |
| J1-J8, J10, J12, J14, J16                              |    12 | SMA connectors (edge mount, tab contact)  |
| JU1, JU3, JU8, JU9                                     |     4 | 3-pin headers, 0.1in centers              |
| JU2, JU4-JU7                                           |     5 | 2-pin headers, 0.1in centers              |
| JU1-JU9                                                |     9 | Shunts Digi-Key S9000-ND                  |
| L1-L6                                                  |     6 | 56nH inductors Coilcraft 0805CS-560XKBC   |
| TP5-TP10, J9, J11, J13, J15, J18, J19, J20             |    13 | Test points Digi-Key 5000K-ND             |
| U1                                                     |     1 | MAX3841ETG 24-pin Thin QFN                |
| None                                                   |     1 | MAX3841 EV kit circuit board, Rev A       |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_ Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 843-448-9411 | 843-626-3123 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Digi-Key   | 800-344-4539 | 218-681-3380 |
| Murata     | 770-436-1300 | 770-436-3030 |

Note: Please indicate that you are using the MAX3841 when ordering from these suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Features

- ♦ DC-Coupled Evaluation Kit
- ♦ Independent Power-Supply Connections
- ♦ Fully Assembled and Tested
- ♦ SMA Connectors for CML Inputs and Outputs
- ♦ Additional Transmission Lines for Calibration

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART         | TEMP RANGE         | IC PACKAGE   |
|--------------|--------------------|--------------|
| MAX3841EVKIT | -40 ° C to +85 ° C | 24 Thin QFN  |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Quick Start

Caution: The MAX3841  EV kit is a DC-coupled evaluation board. Each CML  input and output is terminated with 50 Ω to the respective I/O supplies. DCcoupled operation with positive I/O supplies may cause permanent damage to laboratory test equipment (oscilloscope, BERT). The I/O supplies must be connected to ground and a negative supply connected to VEE when DC-coupling to laboratory test equipment.

- 1) Connect the I/O supplies to ground and disconnect VEE  from  ground  by  placing  shunts  on  JU2,  JU4, JU5, JU6, and removing the shunt from JU7.
- 2) Enable both outputs by placing shunts across pins 1 and 2 of JU8 and JU9.
- 3) Configure the crosspoint switch to route IN1 to both OUT1 and OUT2 by placing shunts across pins 2 and 3 of JU1 and across pins 1 and 2 of JU3.
- 4) Connect  a +1.5V  power supply to J13 (VCC). Connect  the  power-supply  ground  to  J19  (GND). Connect a -1.8V power supply to J20 (VEE).
- 5) Apply  a  10Gbps  differential  signal  (150mVP-P  to 1200mVP-P)  to  SMA  connectors  J1  (IN1+)  and  J2 (IN1-).
- 6) Connect  an  oscilloscope  with  50 Ω terminations  to SMA  connectors  J5  (OUT1-), J6  (OUT1+),  J7 (OUT2+), and J8 (OUT2-).

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX3841 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_Supply Configurations

## DC-Coupling to Lab Equipment

Place shunts on JU2, JU4, JU5, and JU6 to connect the I/O supplies to ground.  Remove the shunt from JU7 to disconnect  VEE  from  GND.  Connect  a  +1.5V  supply  to VCC  (J13),  supply  ground  to  GND  (J19),  and  a  -1.8V supply to VEE (J20).

This supply configuration puts 3.3V on the core supply and  1.8V  on  all  the  I/O  supplies.  All  the  I/O  supplies must  have  the  same  voltage  when  DC-coupled  to  lab equipment. Adjustment to  the  core  and  I/O  supplies  is done in two steps. First, adjust VEE until the desired I/O supply voltage is achieved. Second, adjust VCC until the desired core supply voltage is achieved. Adjustments to VEE change both the I/O and core supplies, but adjustments to VCC only change the core supply.

For example, to have a core supply voltage of 3.3V and an I/O supply voltage of 2.5V, adjust VEE to -2.5V and VCC to +0.8V.

## AC-Coupling

Connect  external  AC-coupling  capacitors  to  IN1 ± (J1, J2), IN2 ± (J3, J4), OUT1 ± (J5, J6), and OUT2 ± (J7, J8). Remove  the  shunts  from  JU2,  JU4,  JU5,  and  JU6  to disconnect  the  I/O  supplies  from  one  another  and ground. Place a shunt on JU7 to connect VEE to ground. Connect a +3.3V supply to VCC (J13) and supply ground to  GND  (J19).  Connect  any  voltage  between  +1.71V and  VCC  to  VCC1IN  (J9),  VCC2IN  (J18),  VCC1OUT (J11), and VCC2OUT (J15).

When the inputs and outputs are AC-coupled, each  of the I/O supplies (VCC1IN, VCC2IN, VCC1OUT, VCC2OUT)  are  independent  and  do  not  need  to  be connected  to  the  same  voltage.  The  core  supply  is independent  of  the  I/O  supplies,  but  it  must  have  a voltage between 3.0V and 3.6V for proper operation.

## DC-Coupling Chip-to-Chip

Remove  the  shunts  from  JU2,  JU4,  JU5,  and  JU6  to disconnect  the  I/O  supplies  from  one  another  and ground. Place a shunt on JU7 to connect VEE to ground. Connect a +3.3V supply to VCC (J13) and supply ground to  GND  (J19).  Connect  the  input  supplies  (VCC1IN, VCC2IN)  to  the  output  termination voltages of  the previous chip(s) (transmitters). Connect the output supplies (VCC1OUT, VCC2OUT) to the input termination voltages of the following chip(s) (receivers). Verify all the supplies have a common ground.  Each of the  I/O  supplies  can  be  at  different  voltages  between +1.71V and VCC.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Output Controls

Each  of  the  LVCMOS  control  inputs  (ENO1,  ENO2, SEL1, SEL2) can be set high or low using the on-board 3-pin  headers  (JU1,  JU3,  JU8,  JU9).  Placing  a  shunt across pins 1 and 2 forces a control input low (VEE), and placing  a  shunt  across  pins  2  and  3  forces  a  control input high (VCC). See Table 1 for the setting options.

Table 1. Output Controls

|   ENO1 |   ENO2 | SEL1   | SEL2   | OUT1     | OUT2     |
|--------|--------|--------|--------|----------|----------|
|      0 |      0 | 0      | 0      | IN2      | IN1      |
|      0 |      0 | 0      | 1      | IN2      | IN2      |
|      0 |      0 | 1      | 0      | IN1      | IN1      |
|      0 |      0 | 1      | 1      | IN1      | IN2      |
|      0 |      1 | 0      | X      | IN2      | Disabled |
|      0 |      1 | 1      | X      | IN1      | Disabled |
|      1 |      0 | X      | 0      | Disabled | IN1      |
|      1 |      0 | X      | 1      | Disabled | IN2      |
|      1 |      1 | X      | X      | Disabled | Disabled |

1 = Pins 2 and 3 shunted.

X = Don't care.

## MAX3841 Evaluation Kit

Figure 1.  MAX3841 EV Kit Schematic Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## MAX3841 Evaluation Kit

Figure 2. MAX3841 EV Kit Component Placement GuideComponent Side

<!-- image -->

4

Figure 3. MAX3841 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3841 Evaluation Kit

<!-- image -->

Figure 4.  MAX3841 EV Kit PC Board Layout-Ground Plane

<!-- image -->

Figure 5.  MAX3841 EV Kit PC Board Layout-Power Plane

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5

## MAX3841 Evaluation Kit

Figure 6.  MAX3841 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA 94086 408-737-7600