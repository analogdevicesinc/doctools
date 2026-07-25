<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX3296 Shortwave or VCSEL (Common Cathode) Evaluation Kit

## General Description

The MAX3296 shortwave or vertical cavity-surface emitting  laser  (VCSEL)  evaluation  kit  (EV  kit)  is  an  assembled, surface-mount demonstration board that allows easy optical and electrical evaluation of the MAX3286 1.25Gbps laser driver or the MAX3296 2.5Gbps laser driver in the common-cathode configuration. Shortwavelength laser diodes (wavelength ≤ 980nm) and VCSELs typically require a common-cathode configuration.  In  the  common-cathode configuration, the laser's cathode connects to ground and the laser is driven at its anode.

The MAX3296 shortwave or VCSEL EV kit regulates the laser  bias  current  to  keep  a  constant  photodiode  current or the kit directly senses the laser bias current and holds it constant.

Refer to the MAX3296EVKIT-LW for evaluation of the MAX3286/MAX3296 with long-wavelength laser diodes in the common-anode configuration.

| DESIGNATION                    |   QTY | DESCRIPTION                                                             |
|--------------------------------|-------|-------------------------------------------------------------------------|
| C1-C5, C13, C14, C22, C25, C26 |    10 | 0.01µF ±10%, 16V min, X7R ceramic capacitors (0402)                     |
| C11                            |     1 | 0.1µF ±10%, 16V min, X7R ceramic capacitor (0402)                       |
| C12                            |     0 | Open, user supplied (0402)*                                             |
| C23                            |     1 | 10µF ±10%, 16V tantalum capacitor AVX TAJC106K016                       |
| D1                             |     0 | Open, user supplied (laser diode and photodiode assembly; see Figure 1) |
| D3                             |     1 | Red LED                                                                 |
| J1, J2, J5                     |     3 | SMA connectors (edge mount) EFJohnson 142-0701-801 or Digi-Key J502-ND  |
| J7, J8                         |     2 | Test points Digi-Key 5000K-ND                                           |
| JU1-JU5                        |     5 | 2-pin headers (0.1in centers) Digi-Key S1012-36-ND                      |
| L1, L2                         |     2 | Ferrite beads Murata BLM11HA102SG                                       |
| L4                             |     1 | Ferrite bead Murata BLM11HA601SG                                        |

Features

- ♦ Drives Common-Cathode Lasers
- ♦ Includes Socket for Laser Insertion
- ♦ LED Fault Indicator
- ♦ Evaluates Either MAX3286 or MAX3296 (installed)
- ♦ Adjustable DC Bias Current for VCSELs
- ♦ Adjustable Photodiode Current
- ♦ Adjustable Modulation Current
- ♦ Adjustable Modulation Current Tempco
- ♦ Configured for Electrical Operation, No Laser Necessary

## Ordering Information

| PART             | TEMP. RANGE   | IC PACKAGE   |
|------------------|---------------|--------------|
| MAX3296EVKIT-SW  | 0°C to +70°C  | 32 TQFP      |
| MAX3296CGISEVKIT | 0°C to +70°C  | 28 QFN       |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                   |
|---------------|-------|---------------------------------------------------------------|
| L8            |     1 | Ferrite bead (included but not installed) Murata BLM11HA102SG |
| Q1            |     0 | Open                                                          |
| Q2            |     1 | Zetex FMMT491A                                                |
| Q4            |     1 | Zetex FMMT591A                                                |
| R2            |     1 | 115 Ω ±1% resistor (0402)                                     |
| R3            |     1 | 100k Ω variable resistor Bourns or Digi-Key 3296W-104-ND      |
| R4            |     1 | 50k Ω variable resistor Bourns or Digi-Key 3296W-503-ND       |
| R5            |     1 | 10k Ω variable resistor Bourns or Digi-Key 3296W-103-ND       |
| R9, R30       |     2 | 1k Ω ±5% resistors (0402)                                     |
| R10           |     1 | 5.1k Ω ±5% resistor (0402)                                    |
| R11           |     1 | 200 Ω variable resistor Bourns or Digi-Key 3296W-201-ND       |
| R12           |     1 | 0 Ω resistor (0402)                                           |
| R13           |     1 | 24.9 Ω ±1% resistor (0402)*                                   |
| R20           |     1 | 49.9 Ω ±1% resistor (0402)                                    |
| R22           |     1 | 36 Ω ±5% resistor (0603)                                      |

## Component List continues on next page.

*These components are part of the compensation network, which reduces overshoot and ringing. Parasitic series inductance introduces a zero into the laser's frequency response. R13 and C12 add a pole to cancel this zero. The optimal values depend upon the laser used. Maxim recommends R13 = 24.9 Ω and C12 = 2pF as a starting point.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX3296 Shortwave or VCSEL (Common Cathode) Evaluation Kit

## Component List (continued)

| DESIGNATION                                      |   QTY | DESCRIPTION                                          |
|--------------------------------------------------|-------|------------------------------------------------------|
| R23                                              |     1 | 0 Ω resistor (0603)                                  |
| R24                                              |     1 | 24.9 Ω ±1% resistor (0402)                           |
| R25                                              |     1 | 511 Ω ±1% resistor (0402)                            |
| TP1, TP3, TP4, TP9, TP10, TP14, TP15, TP19, TP20 |     9 | Test points Digi-Key 5000k-NO                        |
| U1**                                             |     1 | MAX3296CHJ (32-pin TQFP)                             |
| U1**                                             |     1 | MAX3286CHJ (32-pin TQFP, included but not installed) |
| U1**                                             |     1 | MAX3296CGI (28-pin QFN)                              |
| U1**                                             |     1 | MAX3286CGI (28-pin QFN included but not installed)   |
| U2                                               |     1 | MAX4322EUK (5-pin SOT23)                             |

- ** The MAX3296/MAX3286CHJ parts are included with the MAX3296EVKIT-SW. The MAX3296/MAX3286CGI parts are included with the MAX3296CGIS.

## Evaluating the MAX3286

## TQFP Package

The MAX3296EVKIT-SW board can easily be modified to accommodate the MAX3286. Desolder and remove the MAX3296 (the EV board ships with the MAX3296CHJ installed), and replace it with the MAX3286CHJ (included with the EV kit). No other circuit modifications are necessary.

## QFN Package

The MAX3296CGIS EV kit board can be modified to accommodate the MAX3286. Using a hot plate and a small heating block to  localize the heat underneath the part, desolder and remove the MAX3296 (the EV board ships with the MAX3296CGI installed), and replace it with the MAX3286CGI (included with the EV kit). No other circuit modifications are necessary.

## Electrical Quick Start

## Electrical Quick Start with Simulated Photodiode Feedback

- 1) Configure the board so that it will servo the DC bias current, achieving a fixed photodiode current and activating the photodiode emulator circuit. Set up the following shunts:

| SHUNT   | STATUS   |
|---------|----------|
| SP3     | Open     |
| SP4     | Closed   |
| SP5     | Closed   |
| SP6     | Closed   |
| SP7     | Closed   |
| SP8     | Closed   |
| SP9     | Open     |
| SP10    | Open     |
| SP11    | Closed   |

Refer to the MAX3286/MAX3296 Common-Cathode Laser with Photodiode application circuit in the MAX3286-MAX3289/MAX3296-MAX3299 data sheet.

- 2) Make sure nothing is installed in the laser socket (Figure 1).
- 3) Confirm that R24 is installed.
- 4) Make sure L8 is not installed.
- 5) Confirm that C12 is open. Without a laser installed, no compensation network is necessary.
- 6) Set potentiometer R5 (RSET) to midscale by turning the screw counterclockwise until a faint click is felt, then clockwise for 15 full revolutions (30 full revolutions in the 0 Ω to 10k Ω range of the multiturn potentiometer). This sets the regulation point for the simulated photodiode current to (2.65V - 1.7V) / 5k Ω = 190µA. The photodiode emulator circuit regulates the DC bias current out of Q4 to 28 × 190µA ≅ 5mA.
- 7) Set potentiometer R4 (RMOD) to maximum resistance by turning the screw counterclockwise until a faint click is felt (30 full revolutions in the 0 Ω to 50k Ω range of the multiturn potentiometer). This minimizes the modulation current.
- 8) Set potentiometer R3 (RTC) to maximum resistance by turning the screw counterclockwise until a faint click is felt (30 full revolutions in the 0 Ω to 100k Ω range of the multiturn potentiometer). This minimizes the temperature coefficient (tempco) of the modulation current.
- 9) Set potentiometer R11 to 30 Ω of resistance by turning the screw clockwise until a faint click is felt, then counterclockwise for five turns.
- 10) Place jumpers across JU2 (EN), JU3 ( EN ),  and JU4 (PORDLY).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3296 Shortwave or VCSEL (Common Cathode) Evaluation Kit

- 11) If you intend to power the board from a +5V supply, place a jumper across JU1 (LV). Do not apply power yet.
- 12) Make sure there is no jumper on JU5 (FLTDLY).
- 13) Attach a cable with 50 Ω characteristic impedance between the J5 SMA output connector and the input of the oscilloscope. Make sure the oscilloscope input is 50 Ω terminated.
- 14) Attach differential sources to SMA connectors J1 and J2. Each source should have a peak-to-peak amplitude between 100mV and 830mV.
- 15) Apply either +3.3V or +5V power to the board at the J7 (VCC) and J8 (GND) test points. Set the current limit to 300mA.
- 16) While monitoring the voltage on TP19, adjust R5 (RSET) until the desired DC bias current is obtained. Turning the R5 potentiometer screw clockwise increases the DC bias current.
- 17) While monitoring the J5 SMA connector output on the oscilloscope, adjust R4 (RMOD) until the desired modulation current is obtained. Turning the R4 potentiometer screw clockwise increases the modulation current.

## Electrical Quick Start with Bias-Current Feedback (VCSEL)

- 1) Configure the board to directly regulate the DC bias current. Set up the following shunts:

| SHUNT   | STATUS   |
|---------|----------|
| SP3     | Closed   |
| SP4     | Open     |
| SP5     | Closed   |
| SP6     | Closed   |
| SP7     | Open     |
| SP8     | Open     |
| SP9     | Closed   |
| SP10    | Closed   |
| SP11    | Open     |

Refer to the MAX3286/MAX3296 Common-Cathode Laser Without Photodiode application circuit in the MAX3286-MAX3289/MAX3296-MAX3299 data sheet.

- 2) Make sure nothing is installed in the laser socket (Figure 1).
- 3) Confirm that R24 is installed.
- 4) Make sure L8 is not installed.
- 5) Confirm that C12 is open. Without a laser installed, no compensation network is necessary.
- 6) Set potentiometer R11 to midscale by turning the screw counterclockwise until a faint click is felt, then clockwise for 15 full revolutions (30 full revolutions in the 0 Ω to  200 Ω range of the multiturn potentiometer). This sets the regulation point for the laser bias current to 0.25V / 100 Ω = 2.5mA.
- 7) Set potentiometer R4 (RMOD) to maximum resistance by turning the screw counterclockwise until a faint  click  is  felt  (30  full  revolutions  in  the  0 Ω to 50k Ω range of the multiturn potentiometer). This minimizes the modulation current.
- 8) Set potentiometer R3 (RTC) to maximum resistance by turning the screw counterclockwise until a faint click  is  felt  (30  full  revolutions  in  the  0 Ω to  100k Ω range of the multiturn potentiometer). This minimizes the tempco of the modulation current.
- 9) Place jumpers across JU2 (EN), JU3 ( EN ), and JU4 (PORDLY).
- 10) If you intend to power the board from a +5V supply, place a jumper across JU1 (LV). Do not apply power yet.
- 11) Make sure there is no jumper on JU5 (FLTDLY).
- 12) Attach a cable with 50 Ω characteristic impedance between the J5 SMA output connector and the input of the oscilloscope. Make sure the oscilloscope input is 50 Ω terminated.
- 13) Attach differential sources to SMA connectors J1 and J2. Each source should have a peak-to-peak amplitude between 100mV and 830mV.
- 14) Apply either +3.3V or +5V power to the board at the J7 (VCC) and J8 (GND) test points. Set the current limit to 300mA.
- 15) While monitoring the voltage on TP19, adjust R11 until  the  desired DC bias current is obtained. Turning the R11 potentiometer screw clockwise increases the DC bias current.
- 16) While monitoring the J5 SMA connector output on the oscilloscope, adjust R4 (RMOD) until the desired modulation current is obtained. Turning the R4 potentiometer screw clockwise increases the modulation current.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3296 Shortwave or VCSEL (Common Cathode) Evaluation Kit

## Emulating a Photodiode During Electrical Evaluation

When evaluating the MAX3286/MAX3296 without a l aser  (see Electrical  Quick  Start sections),  the MAX3286/MAX3296 DC bias circuitry operates using a photodiode emulator circuit. When shunts SP6 and SP7 are shorted, U2 (MAX4322), Q2 (FMMT491A), and R30 form a current-controlled current source that emulates the  behavior of the photodiode in the laser assembly. R22 takes the place of the laser diode, and the photodiode emulator circuitry sinks a current from the collector of Q2 equal to 3% of the current through R22. This simulates the behavior of a laser diode and photodiode assembly where a fraction of the laser light reflects onto the photodiode, which then outputs a small current proportional to the light emitted.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Optical Quick Start

## Optical Quick Start with Photodiode Feedback

- 1) Configure the board so that it will servo the laser bias current, achieving a fixed photodiode current. Set up the following shunts:

Refer to the MAX3286/MAX3296 Common-Cathode Laser with Photodiode applications circuit in the MAX3286-MAX3289/MAX3296-MAX3299 data sheet.

| SHUNT   | STATUS   |
|---------|----------|
| SP3     | Open     |
| SP4     | Closed   |
| SP5     | Closed   |
| SP6     | Open     |
| SP7     | Open     |
| SP8     | Closed   |
| SP9     | Open     |
| SP10    | Open     |
| SP11    | Closed   |

- 2) Remove R24.
- 3) Install L8.
- 4) Connect a laser to the board (Figure 1).
- 5) Set potentiometer R5 (RSET) to midscale by turning the screw counterclockwise until a faint click is felt,

then clockwise for 15 full revolutions (30 full revolutions in the 0 Ω to  10k Ω range of the multiturn potentiometer). This sets the regulation point for the photodiode current to (2.65V - 1.7V) / 5k Ω = 190µA.

- 6) Set potentiometer R4 (RMOD) to maximum resistance by turning the screw counterclockwise until a faint  click  is  felt  (30  full  revolutions  in  the  0 Ω to 50k Ω range of the multiturn potentiometer). This minimizes the modulation current (AC drive applied to laser).
- 7) Set potentiometer R3 (RTC) to maximum resistance by turning the screw counterclockwise until a faint click  is  felt  (30  full  revolutions  in  the  0 Ω to  100k Ω range of the multiturn potentiometer). This minimizes the tempco of the modulation current.
- 8) Set potentiometer R11 to 30 Ω of resistance by turning the screw clockwise until a faint click is felt, then counterclockwise five turns.
- 9) Attach a 50 Ω SMA terminator to J5 to match the laser loading.
- 10) Place jumpers across JU2 (EN), JU3 ( EN ), and JU4 (PORDLY).
- 11) If you intend to power the board from a +5V supply, place a jumper across JU1 (LV). Do not apply power yet.
- 12) Make sure there is no jumper on JU5 (FLTDLY).
- 13) Attach differential sources to SMA connectors J1 and J2. Each source should have a peak-to-peak amplitude between 100mV and 830mV.
- 14) Apply either +3.3V or +5V power to the board at the J7 (VCC) and J8 (GND) test points.
- 15) While monitoring the laser output, adjust R5 (RSET) until  the  desired  laser  bias  current  is  obtained. Turning the R5 potentiometer screw clockwise increases the laser bias current.
- 16) While monitoring the laser output, adjust R4 (RMOD) until  the  desired laser modulation current is obtained. Turning the R4 potentiometer screw clockwise increases the laser modulation current.
- 17) Look at the 'eye' output on the oscilloscope. Laser overshoot and ringing can be improved by appropriate selection of R13 and C12, as described in the Designing the Laser-Compensation Filter Network section of the MAX3286-MAX3289/MAX3296MAX3299 data sheet.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

- 1)

## MAX3296 Shortwave or VCSEL (Common Cathode) Evaluation Kit

## Optical Quick Start with Bias-Current Feedback (VCSELs)

- Configure the board to directly regulate the laser bias current. Set up the following shunts: Refer to the MAX3286/MAX3296 Common-Cathode Laser Without Photodiode application circuit in the MAX3286-MAX3289/MAX3296-MAX3299 data sheet.
- 2) Remove R24.
- 3) Install L8.
- 4) Connect a laser to the board (Figure 1).
- 5) Set potentiometer R11 to midscale by turning the screw counterclockwise until a faint click is felt, then clockwise for 15 full revolutions (30 full revolutions in the 0 Ω to  200 Ω range of the multiturn potentiometer). This sets the regulation point for the laser bias current to 0.25V / 100 Ω = 2.5mA.
- 6) Set potentiometer R4 (RMOD) to maximum resistance by turning the screw counterclockwise until a faint  click  is  felt  (30  full  revolutions  in  the  0 Ω to 50k Ω range of the multiturn potentiometer). This minimizes the modulation current.
- 7) Set potentiometer R3 (RTC) to maximum resistance by turning the screw counterclockwise until a faint click  is  felt  (30  full  revolutions  in  the  0 Ω to  100k Ω range of the multiturn potentiometer). This minimizes the tempco of the modulation current.
- 8) Attach a 50 Ω SMA terminator to J5 to match the laser loading.
- 9) Place jumpers across JU2 (EN), JU3 ( EN ), and JU4 (PORDLY).
- 10) If you intend to power the board from a +5V supply, place a jumper across JU1 (LV). Do not apply power yet.
- 11) Make sure there is no jumper on JU5 (FLTDLY).
- 12) Attach differential sources to SMA connectors J1 and J2. Each source should have a peak-to-peak amplitude between 100mV and 830mV.
- 13) Apply either +3.3V or +5V power to the board at the J7 (VCC) and J8 (GND) test points. Set the current limit to 300mA.
- 14) While monitoring the laser output, adjust R11 until the desired DC bias current is obtained. Turning the R11 potentiometer screw clockwise increases the DC bias current.
- 15) While monitoring the laser output, adjust R4 (RMOD) until the desired modulation current is obtained. Turning the R4 potentiometer screw clockwise increases the modulation current.
- 16) Look at the 'eye' output on the oscilloscope. Laser overshoot and ringing can be improved by appropriate selection of R13 and C12 as described in the Designing the Laser-Compensation Filter Network section of the MAX3286-MAX3289/MAX3296MAX3299 data sheet.

| SHUNT   | STATUS   |
|---------|----------|
| SP3     | Closed   |
| SP4     | Open     |
| SP5     | Closed   |
| SP6     | Open     |
| SP7     | Open     |
| SP8     | Open     |
| SP9     | Closed   |
| SP10    | Closed   |
| SP11    | Open     |

<!-- image -->

Figure 1. Optical Connection Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3296 Shortwave or VCSEL (Common Cathode) Evaluation Kit

## Table 1. Adjustment and Control Descriptions

| COMPONENT   | NAME   | FUNCTION                                                                                                                                                                                                                                                                                                                                      |
|-------------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| D3          | FAULT  | The LED shines red when a fault has occurred. The fault condition can be cleared by removing, then reinstalling, jumpers at JU2 or JU3.                                                                                                                                                                                                       |
| JU1         | LV     | Placing a jumper on JU1 connects the LV pin to ground and programs the power-on reset circuit for +4.5V to +5.5V operation.                                                                                                                                                                                                                   |
| JU2         | EN     | Placing a jumper on JU2 ties the EN pin to VCC. When JU2 is not installed, the EN pin is pulled low by its internal pull-down.                                                                                                                                                                                                                |
| JU3         | EN     | Placing a jumper on JU3 ties the EN pin to ground. When JU3 is not installed, the EN pin is pulled high by its internal pull-up.                                                                                                                                                                                                              |
| JU4         | PORDLY | Placing a jumper on JU4 connects the PORDLY pin to a 0.01µF capacitor (C5). Leaving JU4 open floats the PORDLY pin and minimizes the power-on reset time.                                                                                                                                                                                     |
| JU5         | FLTDLY | Placing a jumper on JU5 disables the laser-driver safety features.                                                                                                                                                                                                                                                                            |
| R3          | R TC   | Potentiometer R3, in conjunction with potentiometer R4 (R MOD ), sets the tempco of the laser modulation current. Turn the potentiometer screw counterclockwise to increase the resistance. The tempco decreases when the potentiometer screw is turned counterclockwise.                                                                     |
| R4          | R MOD  | Potentiometer R4, in conjunction with potentiometer R3 (R TC ), sets the peak-to-peak amplitude of the laser modulation current. Turn the potentiometer screw counterclockwise to increase the resistance. The laser modulation-current amplitude decreases when the potentiometer screw is turned counterclockwise.                          |
| R5          | R SET  | Potentiometer R5 adjusts the desired laser DC-current bias point. Potentiometer R5 sets the resistance from MD to ground, and MD regulates to 1.7V. Turn the potentio- meter screw clockwise to decrease the resistance. The total range is 0 to 100k Ω . The laser average power increases when the potentiometer screw is turned clockwise. |
| R11         | -      | R11 adjusts the amount of degeneration in the bias transistor when using a photodiode. When directly sensing bias current, R11 sets the regulation point.                                                                                                                                                                                     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3296 Shortwave or VCSEL (Common Cathode) Evaluation Kit

Figure 2. MAX3296EVKIT-SW Evaluation Board Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3296 Shortwave or VCSEL (Common Cathode) Evaluation Kit

Figure 3. MAX3296CGISEVKIT Evaluation Board Schematic

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3296 Shortwave or VCSEL (Common Cathode) Evaluation Kit

<!-- image -->

Figure 4. MAX3296EVKIT-SW Component Placement Guide-Top Silkscreen

<!-- image -->

Figure 6. MAX3296EVKIT-SW PC Board Layout-Ground Plane

<!-- image -->

Figure 5. MAX3296EVKIT-SW PC Board Layout-Component Side

<!-- image -->

Figure 7. MAX3296EVKIT-SW PC Board Layout-Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3296 Shortwave or VCSEL (Common Cathode) Evaluation Kit

<!-- image -->

Figure 8. MAX3296EVKIT-SW PC Board Layout-Solder Side

<!-- image -->

Figure 10. MAX3296CGISEVKIT PC Board Layout-Component Side

Figure 9. MAX3296CGISEVKIT Component Placement Guide-Top Silkscreen

<!-- image -->

Figure 11. MAX3296CGISEVKIT PC Board Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 12. MAX3296CGISEVKIT PC Board Layout-Power Plane

<!-- image -->

Figure 13. MAX3296CGISEVKIT PC Board Layout-Solder Side

<!-- image -->

Maxim makes no warranty, representation or guarantee regarding the suitability of its products for any particular purpose, nor does Maxim assume any liability arising out of the application or use of any product or circuit and specifically disclaims any and all liability, including without limitation consequential or incidental damages. 'Typical' parameters can and do vary in different applications. All operating parameters, including 'typicals' must be validated for each customer application by customer's technical experts. Maxim products are not designed, intended or authorized for use as components in systems intended for surgical implant into the body, or other applications intended to support or sustain life, or for any other application in which the failure of the Maxim product could create a situation where personal injury or death may occur.