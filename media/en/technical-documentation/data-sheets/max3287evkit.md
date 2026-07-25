<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX3287 Shortwave or VCSEL (Common Cathode) Evaluation Kit

## General Description

The MAX3287 shortwave or VCSEL evaluation kit (EV kit)  is  an  assembled, surface-mount demonstration board that allows easy optical and electrical evaluation of  the  MAX3287/MAX3288 1.25Gbps laser drivers or the MAX3297/MAX3298 2.5Gbps laser drivers in the common-cathode configuration. Short-wavelength laser diodes (wavelength ≤ 980nm) and vertical cavity-surface emitting lasers (VCSELs) typically require a common-cathode configuration. In the common-cathode configuration, the laser's cathode connects to ground and the laser is driven at its anode.

When used with the MAX3287/MAX3297, the laser bias current regulates to keep a constant photodiode current  (for  shortwave  laser  diodes).  When  used  with  the MAX3288/MAX3298, the laser bias current is directly sensed and held constant.

This EV kit includes an extra blank circuit without components to demonstrate a small, tight layout optimized for optical evaluation.

| DESIGNATION                    |   QTY | DESCRIPTION                                                            |
|--------------------------------|-------|------------------------------------------------------------------------|
| C1-C4, C13, C14, C22, C40, C52 |     9 | 0.01µF ±10%, 10V min, X7R ceramic capacitors (0402)                    |
| C11                            |     1 | 0.1µF ±10%, 10V min, X7R ceramic capacitor (0603)                      |
| C12                            |     0 | Open, user supplied (0402)*                                            |
| C23                            |     1 | 10µF ±10%, 16V tantalum capacitor AVX TAJC106K016                      |
| D1                             |     0 | Open, user supplied (laser diode and photodiode assembly; Figure 1)    |
| J1, J2                         |     2 | Test points Mouser 151-203                                             |
| J4, J5, J15                    |     3 | SMA connectors (edge mount) EFJohnson 142-0701-801 or Digi-Key J502-ND |
| JU1                            |     1 | 2-pin header (0.1in centers)                                           |
| JU3                            |     1 | 3-pin header (0.1in centers)                                           |
| L1, L2                         |     2 | Ferrite beads Murata BLM11HA102SG                                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- ♦ Drives Common-Cathode Lasers
- ♦ Includes Socket for Laser Insertion
- ♦ Evaluates MAX3287 (installed) or MAX3288/97/98
- ♦ Adjustable DC Bias Current (MAX3288/98)
- ♦ Adjustable Photodiode Current (MAX3287/97)
- ♦ Adjustable Modulation Current
- ♦ Adjustable Modulation-Current Tempco
- ♦ Configured for Electrical Operation, No Laser Necessary
- ♦ Extra-Small-Size Blank Circuit (for optical evaluation only)

## Ordering Information

| PART         | TEMP. RANGE   | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX3287EVKIT | 0°C to +70°C  | 16 TSSOP     |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                   |
|---------------|-------|---------------------------------------------------------------|
| L3            |     1 | Ferrite bead (included but not installed) Murata BLM11HA102SG |
| L4            |     1 | Ferrite bead Murata BLM11HA601SG                              |
| Q1            |     0 | Open                                                          |
| Q2            |     1 | Zetex FMMT591A                                                |
| Q6            |     1 | Zetex FMMT491A                                                |
| R2            |     1 | 115 Ω ±1% resistor (0402)                                     |
| R3            |     1 | 100k Ω variable resistor Bourns or Digi-Key 3296W-104-ND      |
| R4            |     1 | 50k Ω variable resistor Bourns or Digi-Key 3296W-503-ND       |
| R5            |     1 | 10k Ω variable resistor Bourns or Digi-Key 3296W-103-ND       |
| R9            |     1 | 1k Ω ±5% resistor (0402)                                      |
| R10           |     1 | 5.1k Ω ±5% resistor (0402)                                    |
| R11           |     1 | 200 Ω variable resistor Bourns or Digi-Key 3296W-201-ND       |
| R12, R23      |     2 | 0 Ω resistors (0402)                                          |

Maxim Integrated Products

1

For free samples and the latest literature, visit www.maxim-ic.com or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

## Features

## MAX3287 Shortwave or VCSEL (Common Cathode) Evaluation Kit

## Component List (continued)

| DESIGNATION              |   QTY | DESCRIPTION                                              |
|--------------------------|-------|----------------------------------------------------------|
| R13                      |     1 | 24.9 Ω ±1% resistor (0402)*                              |
| R20                      |     1 | 49.9 Ω ±1% resistor (0402)                               |
| R24                      |     0 | 24.9 Ω ±1% resistor (0402)                               |
| R37                      |     1 | 36 Ω ±5% resistor (0603)                                 |
| TP1, TP2, TP3, TP9, TP10 |     6 | Test points Mouser 151-203                               |
| R38                      |     1 | 1k Ω ±5% resistor (0402)                                 |
| U2, U3                   |     2 | MAX3287CUE (16-pin TSSOP-EP)                             |
| U2, U3                   |     2 | MAX3288CUE (16-pin TSSOP-EP, included but not installed) |
| U2, U3                   |     2 | MAX3297CUE (16-pin TSSOP-EP, included but not installed) |
| U2, U3                   |     2 | MAX3298CUE (16-pin TSSOP-EP, included but not installed) |
| U5                       |     1 | MAX4322EUK (5-pin SOT23)                                 |

## Electrical Quick Start

## Electrical Quick Start with the MAX3287/MAX3297 and Simulated Photodiode Feedback

- 1) Configure the board so that it will servo the DC bias current,  achieving a fixed photodiode current and activating the photodiode emulator circuit. Set up the following shunts:

| SHUNT   | STATUS   |
|---------|----------|
| SP1     | Closed   |
| SP2     | Closed   |
| SP3     | Open     |
| SP4     | Closed   |
| SP5     | Closed   |
| SP6     | Closed   |
| SP7     | Open     |
| SP8     | Open     |

Refer to the MAX3287/MAX3297 common-cathode laser with photodiode application circuit in the MAX3286-MAX3289/MAX3296-MAX3299 data sheet.

- 2) Make sure nothing is installed in the laser socket (Figure 1).
- 3) Confirm that R24 is installed.
- 4) Make sure L3 is not installed.
- 5) Confirm that C12 is open. Without a laser installed, no compensation network is necessary.
- 6) Set potentiometer R5 (RSET) to midscale by turning the screw counterclockwise until a faint click is felt, then clockwise for 15 full revolutions (30 full revolutions in the 0 to 10k Ω range of the multiturn potentiometer). This sets the regulation point for the simulated photodiode current to (2.65V - 1.7V) / 5k Ω = 190µA. The photodiode emulator circuit regulates the DC bias current out of Q2 to (28 ✕ 190µA) ≈ 5mA.
- 7) Set potentiometer R4 (RMOD) to maximum resistance by turning the screw counterclockwise until a faint click is felt (30 full revolutions in the 0 to 50k Ω range of the multiturn potentiometer). This minimizes the modulation current.
- 8) Set potentiometer R3 (RTC) to maximum resistance by turning the screw counterclockwise until a faint click  is  felt  (30  full  revolutions  in  the  0  to  100k Ω range of the multiturn potentiometer). This minimizes the temperature coefficient (tempco) of the modulation current.
- 9) Set potentiometer R11 to 30 Ω of resistance by turning the screw clockwise until a faint click is felt, then counterclockwise five turns.
- 10) Make sure there is no jumper on JU1 (FLTDLY).
- 11) Put a jumper between pins 1 and 2 of JU3 to provide power to the main circuit (instead of to the optimized layout circuit).
- 12) Attach a cable with 50 Ω characteristic impedance between the J15 SMA output connector and the input of the oscilloscope. Make sure the oscilloscope input is 50 Ω terminated.
- 13) Attach differential sources to SMA connectors J4 and J5. Each source should have a peak-to-peak amplitude between 100mV and 830mV.
- 14) Apply either +3.3V or +5V power to the board at the J1 (VCC) and J2 (GND) test points. Set the current limit to 300mA.
- 15) While monitoring the voltage across R37 (TP3 to GND), adjust R5 (RSET) until the desired DC bias current is obtained. Turning the R5 potentiometer screw clockwise increases the DC bias current.
- 16) While monitoring the J15 SMA connector output on the oscilloscope, adjust R4 (RMODSET) until the desired modulation current is obtained. Turning the R4 potentiometer screw clockwise increases the modulation current.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3287 Shortwave or VCSEL (Common Cathode) Evaluation Kit

Figure 1. Optical Connection Diagram

<!-- image -->

## Electrical Quick Start with the MAX3288/MAX3298 and Bias-Current Feedback (VCSEL)

- 1) Configure the board to directly regulate the DC bias current. Set up the following shunts:

| SHUNT   | STATUS   |
|---------|----------|
| SP1     | Open     |
| SP2     | Closed   |
| SP3     | Closed   |
| SP4     | Open     |
| SP5     | Closed   |
| SP6     | Open     |
| SP7     | Closed   |
| SP8     | Closed   |

Refer to the MAX3288/MAX3298 common-cathode laser  without  photodiode application circuit in the MAX3286-MAX3289/MAX3296-MAX3299 data sheet.

- 2 Make sure nothing is installed in the laser socket (Figure 1).
- 3) Confirm that R24 is installed.
- 4) Make sure L3 is not installed.
- 5) Confirm that C12 is open. Without a laser installed, no compensation network is necessary.
- 6) Set the R11 potentiometer to midscale by turning the screw counterclockwise until a faint click is felt,

<!-- image -->

then clockwise for 15 full revolutions (30 full revolutions in the 0 to 200 Ω range of the multiturn potentiometer). This sets the regulation point for the laser bias current to 0.25V / 100 Ω = 2.5mA.

- 7) Set potentiometer R4 (RMOD) to maximum resistance by turning the screw counterclockwise until a faint click is felt (30 full revolutions in the 0 to 50k Ω range of the multiturn potentiometer). This minimizes the modulation current.
- 8) Set potentiometer R3 (RTC) to maximum resistance by turning the screw counterclockwise until a faint click  is  felt  (30  full  revolutions  in  the  0  to  100k Ω range of the multiturn potentiometer). This minimizes the tempco of the modulation current.
- 9) Make sure there is no jumper on JU1 (FLTDLY).
- 10) Put a jumper between pins 1 and 2 of JU3 to provide power to the main circuit (instead of to the optimized layout circuit).
- 11) Attach a 50 Ω characteristic impedance cable between the J15 SMA output connector and the input of the oscilloscope. Make sure the oscilloscope input is 50 Ω terminated.
- 12) Attach differential sources to SMA connectors J4 and J5. Each source should have a peak-to-peak amplitude between 100mV and 830mV.
- 13) Apply either +3.3V or +5V power to the board at the J1 (VCC) and J2 (GND) test points. Set the current limit to 300mA.
- 14) While monitoring the voltage between TP3 and GND, adjust R11 until the desired DC bias current is  obtained.  Turning  the  R11  potentiometer screw clockwise increases the DC bias current.
- 15) While monitoring the J15 SMA connector output on the oscilloscope, adjust R4 (RMOD) until the desired modulation current is obtained. Turning the R4 potentiometer screw clockwise increases the modulation current.

## Emulating a Photodiode During Electrical Evaluation

When evaluating the MAX3287/MAX3297 without a laser (see Electrical Quick Start with the MAX3287/ MAX3297 and Simulated Photodiode Feedback ),  the MAX3287/MAX3297 DC bias circuitry operates using a photodiode emulator circuit. When shunts SP1 and SP2 are shorted, U5 (MAX4322), Q6 (FMMT491A), and R38 form a current-controlled current source that emulates the  behavior of the photodiode in the laser assembly. R37 takes the place of the laser diode, and the photodiode emulator circuitry sinks a current from the collector of Q6 equal to 3% of the current through R37. This sim-

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3287 Shortwave or VCSEL (Common Cathode) Evaluation Kit

ulates the behavior of a laser diode and photodiode assembly where a fraction of the laser light reflects onto the photodiode, which then outputs a small current proportional to the light emitted.

## Optical Quick Start

## Optical Quick Start with the MAX3287/MAX3297 and Photodiode Feedback

- 1) Configure the board so that it will servo the laser bias current, achieving a fixed photodiode current. Set up the following shunts:

| SHUNT   | STATUS   |
|---------|----------|
| SP1     | Open     |
| SP2     | Open     |
| SP3     | Open     |
| SP4     | Closed   |
| SP5     | Closed   |
| SP6     | Closed   |
| SP7     | Open     |
| SP8     | Open     |

Refer to the MAX3287/MAX3297 common-cathode laser with photodiode applications circuit in the MAX3286-MAX3289/MAX3296-MAX3299 data sheet.

- 2) Remove R24.
- 3) Install L3.
- 4) Connect a laser to the board (Figure 1).
- 5) Set the R5 (RSET) potentiometer to midscale by turning the screw counterclockwise until a faint click is felt, then clockwise for 15 full revolutions (30 full  revolutions in the 0 to 10k Ω range of the multiturn  potentiometer). This sets the regulation point for the photodiode current to (2.65V - 1.7V) / 5k Ω = 190µA.
- 6) Set potentiometer R4 (RMOD) to maximum resistance by turning the screw counterclockwise until a faint click is felt (30 full revolutions in the 0 to 50k Ω range of the multiturn potentiometer). This minimizes the modulation current (AC drive applied to laser).
- 7) Set potentiometer R3 (RTC) to maximum resistance by turning the screw counterclockwise until a faint click  is  felt  (30  full  revolutions  in  the  0  to  100k Ω range of the multiturn potentiometer). This minimizes the tempco of the modulation current.
- 8) Set potentiometer R11 to 30 Ω of resistance by turning the screw clockwise until a faint click is felt, then counterclockwise five turns.
- 9) Attach a 50 Ω SMA terminator to J15 to match the laser loading.
- 10) Make sure there is no jumper on JU1 (FLTDLY).
- 11) Put a jumper between pins 1 and 2 of JU3 to provide power to the main circuit (instead of to the optimized layout circuit).
- 12) Attach differential sources to SMA connectors J4 and J5. Each source should have a peak-to-peak amplitude between 100mV and 830mV.
- 13) Apply either +3.3V or +5V power to the board at the J1 (VCC) and J2 (GND) test points.
- 14) While monitoring the laser output, adjust R5 (RSET) until  the  desired  laser  bias  current  is  obtained. Turning the R5 potentiometer screw clockwise increases the laser bias current.
- 15) While monitoring the laser output, adjust R4 (RMOD) until  the  desired laser modulation current is obtained. Turning the R4 potentiometer screw clockwise increases the laser modulation current.
- 16) Look at the 'eye' output on the oscilloscope. Laser overshoot and ringing can be improved by appropriate  selection  of  R13  and  C12,  as  described  in the Designing the Laser-Compensation Filter Network section  of  the  MAX3286-MAX3289/ MAX3296-MAX3299 data sheet.

## Optical Quick Start with the MAX3288/ MAX3298 and Bias-Current Feedback (VCSELs)

- 1) Configure the board to directly regulate the laser bias current. Set up the following shunts:

| SHUNT   | STATUS   |
|---------|----------|
| SP1     | Open     |
| SP2     | Open     |
| SP3     | Closed   |
| SP4     | Open     |
| SP5     | Closed   |
| SP6     | Open     |
| SP7     | Closed   |
| SP8     | Closed   |

Refer to the MAX3288/MAX3298 common-cathode laser without photodiode applications circuit in the MAX3286-MAX3289/MAX3296-MAX3299 data sheet.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

- 2) Remove R24
- 3) Install L3.
- 4) Connect a laser to the board (Figure 1).
- 5) Set potentiometer R11 to midscale by turning the screw counterclockwise until a faint click is felt, then clockwise for 15 full revolutions (30 full revolutions in the 0 to 200 Ω range of the multiturn potentiometer). This sets the regulation point for the laser bias current to 0.25V / 100 Ω = 2.5mA.
- 6) Set potentiometer R4 (RMOD) to maximum resistance by turning the screw counterclockwise until a faint click is felt (30 full revolutions in the 0 to 50k Ω range of the multiturn potentiometer). This minimizes the modulation current.
- 7) Set potentiometer R3 (RTC) to maximum resistance by turning the screw counterclockwise until a faint click  is  felt  (30  full  revolutions  in  the  0  to  100k Ω range of the multiturn potentiometer). This minimizes the tempco of the modulation current.
- 8) Attach a 50 Ω SMA terminator to J15 to match the laser loading.
- 9) Make sure there is no jumper on JU1 (FLTDLY).
- 10) Put a jumper between pins 1 and 2 of JU3 to provide power to the main circuit (instead of to the optimized layout circuit).
- 11) Attach differential sources to SMA connectors J4 and J5. Each source should have a peak-to-peak amplitude between 100mV and 830mV.
- 12) Apply either +3.3V or +5V power to the board at the J1 (VCC) and J2 (GND) test points. Set the current limit to 300mA.
- 13) While monitoring the laser output, adjust R11 until the desired DC bias current is obtained. Turning the R11 potentiometer screw clockwise increases the DC bias current.
- 14) While monitoring the laser output, adjust R4 (RMOD) until the desired modulation current is obtained. Turning the R4 potentiometer screw clockwise increases the modulation current.
- 15) Look at the 'eye' output on the oscilloscope. Laser overshoot and ringing can be improved by appropriate selection of R13 and C12 as described in the Designing the Laser-Compensation Filter Network section of the MAX3286-MAX3289/MAX3296MAX3299 data sheet.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3287 Shortwave or VCSEL (Common Cathode) Evaluation Kit

## Detailed Description

## Evaluating the MAX3288/MAX3297/MAX3298

The MAX3287 EV kit ships with the MAX3287 installed in the circuit, but the board can be modified to accommodate the MAX3288, MAX3297, or MAX3298. The MAX3287 comes in an exposed-paddle package. The exposed paddle is an area of exposed metal leadframe underneath the 16-pin package that is soldered to a copper thermal pad. To evaluate the MAX3288/ MAX3297/MAX3298, first follow these steps to remove the MAX3287 from the board:

- 1) Use a solder wick to remove as much solder as possible from the leads on the MAX3287.
- 2) Using a small metal pick, heat each lead, and gently  lift  it  from  its  pad  (being  careful  not  to  damage the underlying trace).
- 3) Flip  the  board over and notice that there is a hole underneath the exposed paddle of the MAX3287 in the middle of the thermal pad. Place the tip of a soldering iron into the hole in the thermal pad; the MAX3287 should fall away from the board.
- 4) Use the solder wick to remove any residual solder around the thermal pad.

Once the MAX3287 has been removed, any of the other three ICs may be mounted on the board.

## MAX3287 Shortwave or VCSEL (Common Cathode) Evaluation Kit

Figure 2. MAX3287 EV Kit Schematic

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3287 Shortwave or VCSEL (Common Cathode) Evaluation Kit

## Table 1. Adjustment and Control Descriptions

Figure 3. MAX3287 EV Kit Component Placement Guide

| COMPONENT   | NAME   | FUNCTION                                                                                                                                                                                                                                                                                                                               |
|-------------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1         | FLTDLY | Placing a jumper on JU1 disables the laser-driver safety features.                                                                                                                                                                                                                                                                     |
| R3          | R TC   | Potentiometer R3, in conjunction with potentiometer R4 (R MOD ), sets the tempco of the laser mod- ulation current. Turn the potentiometer screw counterclockwise to increase the resistance. The tempco decreases when the potentiometer screw turns counterclockwise.                                                                |
| R4          | R MOD  | Potentiometer R4, in conjunction with potentiometer R3 (R TC ), sets the peak-to-peak amplitude of the laser modulation current. Turn the potentiometer screw counterclockwise to increase the resistance. The laser modulation-current amplitude decreases when the potentiometer screw turns counterclockwise.                       |
| R5          | R SET  | Potentiometer R5 adjusts the desired laser DC-current bias point. Potentiometer R5 sets the resis- tance from MDto ground, and MDregulates to 1.7V. Turn the potentiometer screw clockwise to decrease the resistance. The total range is 0 to 10k Ω . The laser average power increases when the potentiometer screw turns clockwise. |
| R11         | R MOD  | R11 adjusts the amount of degeneration in the bias transistor when using a photodiode. When directly sensing bias current, R11 sets the regulation point.                                                                                                                                                                              |

<!-- image -->

<!-- image -->

Figure 4. MAX3287 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3287 Shortwave or VCSEL (Common Cathode) Evaluation Kit

<!-- image -->

Figure 5. MAX3287 EV Kit PC Board Layout-Solder Side

Figure 6. MAX3287 EV Kit PC Board Layout-Ground Plane

<!-- image -->

Figure 7. MAX3287 EV Kit PC Board Layout-Power Plane

<!-- image -->

Maxim makes no warranty, presentation or guarantee regarding the suitability of its products for any particular purpose, nor does Maxim assume any liability arising out of the application or use of any product or circuit and specifically disclaims any and all liability, including without limitation consequential or incidental damages. 'Typical' parameters can and do vary in different applications. All operating parameters, including 'typicals' must be validated for each customer application by customer's technical experts. Maxim products are not designed, intended or authorized for use as components in systems intended for surgical implant into the body, or other applications intended to support or sustain life, or for any other application in which the failure of the Maxim product could create a situation where personal injury or death may occur.

8