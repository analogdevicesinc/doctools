<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX3289 Longwave (Common Anode) Evaluation Kit

## General Description

The MAX3289 evaluation kit (EV kit) is an assembled, surface-mount demonstration board that provides easy optical and electrical evaluation of the MAX3289 1.25Gbps laser driver or the MAX3299 2.5Gbps laser driver in the common-anode configuration. This configuration allows evaluation of the MAX3289/MAX3299 with long-wavelength laser diodes. Long-wavelength (1310nm and greater) laser diodes are typically packaged with the laser diode's anode connected to the photodetector's cathode.

| DESIGNATION                                    |   QTY | DESCRIPTION                                                         |
|------------------------------------------------|-------|---------------------------------------------------------------------|
| C7, C9, C10, C15, C16, C21, C26, C44, C48, C49 |    10 | 0.01µF, 10V min ±10% X7R ceramic capacitors (0402)                  |
| C18                                            |     0 | Open, user supplied (0402)**                                        |
| C24                                            |     1 | 10µF, 16V ±10% tantalum capacitor AVX TAJC106K016                   |
| C33                                            |     1 | 0.01µF, 10V min ±10% X7R ceramic capacitor (0603)                   |
| C50                                            |     1 | 0.1µF, 10V min ±10% X7R ceramic capacitor (0603)                    |
| D2                                             |     0 | Open, user supplied (laser diode and photodiode assembly, Figure 1) |
| L2                                             |     1 | Ferrite bead, included but not installed Murata BLM11HA102SG        |
| L3, L6                                         |     2 | Ferrite beads Murata BLM11HA102SG                                   |
| L7                                             |     1 | Ferrite bead Murata BLM11HA601SG                                    |
| JU2                                            |     1 | 3-pin header (0.1in centers)                                        |
| JU10                                           |     1 | 2-pin header (0.1in centers) Digi-Key S1012-36-ND                   |
| J8, J9                                         |     2 | Test points Mouser 151-203                                          |
| TP1, TP2, TP11, TP12, TP13                     |     5 | Test points Mouser 151-203                                          |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                       |
|---------------|-------|---------------------------------------------------------------------------------------------------|
| R1            |     1 | 0 Ω resistor (0402)                                                                               |
| R6            |     1 | 115 Ω ±1% resistor (0402)                                                                         |
| R7, R14       |     2 | 100k Ω variable resistors Bourns Digi-Key 3296W-104-ND                                            |
| R8            |     1 | 50k Ω variable resistor Bourns Digi-Key 3296W-503-ND                                              |
| R15, R40      |     2 | 36 Ω ±5% resistors (0603)                                                                         |
| R16           |     1 | 18 Ω ±5% resistor (0402)                                                                          |
| R17           |     1 | 24.9 Ω ±1% (0402)**                                                                               |
| R19           |     1 | 49.9 Ω ±1% resistor (0402)                                                                        |
| R27           |     1 | 6.8 Ω ±1% resistor (0402)                                                                         |
| R39           |     1 | 1k Ω ±5% resistor (0402)                                                                          |
| J11, J12, J16 |     3 | SMA connectors (edgemount) EFJohnson 142-0701-801 or Digi-Key J502-ND                             |
| Q3            |     1 | Zetex FMMT491A                                                                                    |
| Q7            |     1 | Zetex FMMT591A                                                                                    |
| U1            |     2 | Installed: MAX3289CUE (16-pin TSSOP-EP); included but not installed: MAX3299CUE (16-pin TSSOP-EP) |
| U6            |     1 | MAX4322EUK (5-pin SOT23)                                                                          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For free samples and the latest literature, visit www.maxim-ic.com or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

Features

- ♦ Drives Common-Anode Lasers
- ♦ Socket for Laser Insertion
- ♦ LED Fault Indicator
- ♦ Evaluates Either MAX3289 (installed) or MAX3299
- ♦ Adjustable Laser Bias Current
- ♦ Adjustable Laser Modulation-Current Temperature Coefficient
- ♦ Configured for Electrical Operation, No Laser Necessary

## Ordering Information

| PART         | TEMP. RANGE   | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX3289EVKIT | 0°C to +70°C  | 16 TSSOP-EP* |

*Exposed Pad

## MAX3289 Longwave (Common Anode) Evaluation Kit

## Electrical Quick Start with Simulated Photodiode Feedback

- 1) Short shunts SP9 and SP10 to use the photodiode emulator circuitry (see Emulating a Photodiode During Electrical Evaluation ).
- 2) Make sure nothing is installed in the laser socket (Figure 1).
- 3) Ensure that R27 is installed.
- 4) Ensure that L2 is not installed.
- 5) Confirm that C18 is open. Since the laser is not installed, no compensation network is required.
- 6) Set the R14 (RSET) potentiometer to midscale by turning the screw clockwise until a faint click is felt, then counterclockwise for 15 full revolutions (30 full revolutions in the 0 to 100k Ω range of the multiturn potentiometer). This sets the regulation point for the simulated photodiode current to 1.7V / 50k Ω = 34µA. The photodiode emulator circuit regulates the DC bias current into Q3 to 28 · 34µA ≅ 1mA.
- 7) Set the R8 (RMOD) potentiometer to maximum resistance by turning the screw counterclockwise until a faint click is felt (30 full revolutions in the 0 to 50k Ω range of the multiturn potentiometer). This minimizes the modulation current.
- 8) Set the R7 (RTC) potentiometer to maximum resistance by turning the screw counterclockwise until a faint click is felt (30 full revolutions in the 0 to 100k Ω range of the multiturn potentiometer). This minimizes the temperature coefficient of the modulation current.
- 9) Ensure there is no jumper on JU10 (FLTDLY). This enables the safety circuitry.
- 10) Attach a 50 Ω characteristic impedance cable between the J16 SMA output connector and the input of the oscilloscope. Ensure the oscilloscope input is 50 Ω terminated.
- 11) Attach differential  sources to SMA connectors J11 and J12. Each source should have peak-to-peak amplitude between 100mV and 830mV.
- 12) Apply either +3.3V or +5V power to the board at the J8 (VCC) and J9 (GND) test points. Put a jumper across pins 1 and 2 of JU2. Set the current limit to 300mA.
- 13) While monitoring the voltage between TP2 and TP13, adjust R14 (RSET) until the desired DC bias current is obtained. Turning the R14 potentiometer screw counterclockwise increases the DC bias current.
- 14) While monitoring the J16 SMA connector output on the oscilloscope, adjust R8 (RMOD) until the desired

modulation current is obtained. Turning the R8 potentiometer screw clockwise increases the modulation current.

## Optical Quick Start with Photodiode Feedback

- 1) Ensure that SP9 and SP10 are open. This ensures that  the  photodiode emulator circuitry is not connected.
- 2) Remove R27.
- 3) Install L2.
- 4) Connect a laser to the board (Figure 1).
- 5) Set the R14 (RSET) potentiometer to maximum resistance by turning the screw counterclockwise until a faint  click  is  felt,  then  counterclockwise  for  15  full revolutions (30 full revolutions in the 0 to 100k Ω range of the multiturn potentiometer). This sets the regulation point for the photodiode current to 1.7V / 50k Ω = 34µA. The resulting laser bias current depends upon the relationship between laser power and photodiode output current. WARNING: Consult your laser data sheet to ensure that 34µA of photodiode monitor current does not correspond to excessive laser power.
- 6) Set the R8 (RMOD) potentiometer to maximum resistance by turning the screw counterclockwise until a faint click is felt (30 full revolutions in the 0 to 50k Ω range of the multiturn potentiometer). This minimizes the modulation current (AC drive applied to laser).
- 7) Set the R7 (RTC) potentiometer to maximum resistance by turning the screw counterclockwise until a faint click is felt (30 full revolutions in the 0 to 100k Ω range of the multiturn potentiometer). This minimizes the temperature coefficient of the modulation current.
- 8) Attach a 50 Ω SMA terminator to J16 to match the laser loading.
- 9) Ensure there is no jumper on JU10 (FLTDLY). This enables the safety circuitry.
- 10) Attach differential  sources to SMA connectors J11 and J12. Each source should have peak-to-peak amplitude between 100mV and 830mV.
- 11) Apply either +3.3V or +5V power to the board at the J8 (VCC) and J9 (GND) test points. Put a jumper across pins 1 and 2 of JU2. Set the current limit to 300mA.
- 12) While monitoring the laser output, adjust R14 (RSET) until  the  desired  laser  bias  current  is  obtained. Turning the R14 potentiometer screw counterclockwise increases the laser bias current.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3289 Longwave (Common Anode) Evaluation Kit

## Table 1.  Adjustment and Control Descriptions

| DESIGNATION   | NAME   | FUNCTION                                                                                                                                                                                                                                                                                                                                  |
|---------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU2           | -      | Placing a jumper between pins 1 and 2 of JU2 applies power to the upper prestuffed circuit. Placing a jumper between pins 2 and 3 of JU2 applies power to the lower unstuffed circuit.                                                                                                                                                    |
| JU10          | FLTDLY | Placing a jumper on JU10 disables the laser driver safety features.                                                                                                                                                                                                                                                                       |
| R7            | R TC   | Potentiometer R7, in conjunction with potentiometer R8 (R MOD ), sets the temperature coefficient of the laser modulation current. Turn the potentiometer screw counterclock- wise to increase resistance. The temperature coefficient decreases when the poten- tiometer screw turns counterclockwise.                                   |
| R8            | R MOD  | Potentiometer R8, in conjunction with potentiometer R7 (R TC ), sets the peak-to-peak amplitude of the laser modulation current. Turn the potentiometer screw counterclock- wise to increase resistance. The laser modulation current amplitude decreases when the potentiometer screws turn counterclockwise.                            |
| R14           | R SET  | Potentiometer R14 adjusts the desired laser DC-current bias point. Potentiometer R14 sets the resistance from MD to ground. MD regulates to 1.77V. Turn the potentiometer screw clockwise to increase resistance. The total range is 0 to 100k Ω . The laser average power increases when the potentiometer screws turn counterclockwise. |
| SP9, SP10     | -      | Short across these shunts with a bridge of solder when performing electrical evaluation.                                                                                                                                                                                                                                                  |

- 13) While monitoring the laser output, adjust R8 (RMOD) until  the  desired  modulation current is obtained. Turning the R8 potentiometer screw clockwise increases the laser modulation current.

## Detailed Description

## Emulating a Photodiode During Electrical Evaluation

When evaluating the MAX3289/MAX3299 without a laser, the IC's DC bias circuitry operates using a photodiode emulator circuit. When shunts SP9 and SP10 are shorted, U6 (MAX4322), Q7, and R39 form a currentcontrolled current source that emulates the behavior of the photodiode in the laser assembly. R40 takes the place of the laser diode, and the photodiode emulator circuitry sources a current from the collector of Q7 that is a fraction of the current through R40. This simulates the behavior of a laser diode and photodiode assembly where a fraction of the laser light reflects onto the photodiode, which then outputs a small current proportional to the light emitted.

## Evaluating the MAX3299

The MAX3289 longwave (common-anode) evaluation kit is shipped with the MAX3289 installed in the circuit. To evaluate the MAX3299, remove the MAX3289 from the board. The MAX3289 comes in an exposed-pad package. The exposed pad is an area of exposed metal lead frame underneath the 16-pin package that is soldered to a copper thermal pad. To remove the MAX3289 follow these steps:

<!-- image -->

- 1) Use solder wick to remove as much solder as possible from the MAX3289's leads.
- 2) Using a small metal pick, heat each lead and gently lift  it  from its pad, being careful not to damage the underlying trace.
- 3) Flip  the  board over and notice that there is a hole underneath the exposed pad of the MAX3289 in the middle of the thermal pad. Place the tip of a soldering iron into the hole in the thermal pad. The MAX3289 should fall away from the board.
- 4) Use solder wick to remove any residual solder around the thermal pad.

Once the MAX3289 has been removed, the MAX3299 may be mounted.

Figure 1.  Optical Connection Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3289 Longwave (Common Anode) Evaluation Kit

Figure 2. MAX3289 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3289 Longwave (Common Anode) Evaluation Kit

<!-- image -->

Figure 2. MAX3289 EV Kit Schematic (continued)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3289 Longwave (Common Anode) Evaluation Kit

Figure 3. MAX3289 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX3289 EV Kit PC Board Layout-Component Side

<!-- image -->

6

Figure 5. MAX3289 EV Kit PC Board Layout-Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3289 Longwave (Common Anode) Evaluation Kit

Figure 6. MAX3289 EV Kit PC Board Layout-Ground Plane

<!-- image -->

<!-- image -->

Figure 7. MAX3289 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3289 Longwave (Common Anode) Evaluation Kit

NOTES

Maxim makes no warranty, representation or guarantee regarding the suitability of its products for any particular purpose, nor does Maxim assume any liability arising out of the application or use of any product or circuit and specifically disclaims any and all liability, including without limitation consequential or incidental damages. 'Typical' parameters can and do vary in different applications. All operating parameters, including 'typicals' must be validated for each customer application by customer's technical experts. Maxim products are not designed, intended or authorized for use as components in systems intended for surgical implant into the body, or other applications intended to support or sustain life, or for any other application in which the failure of the Maxim product could create a situation where personal injury or death may occur.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600