<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX3296 Longwave (Common Anode) Evaluation Kit

## General Description

The MAX3296 longwave (LW) evaluation kit (EV kit) is an assembled, surface-mount demonstration board that provides easy optical and electrical evaluation of the MAX3286 1.25Gbps laser driver or the MAX3296 2.5Gbps laser driver in the common-anode configuration. This kit allows evaluation of the MAX3286/MAX3296 with long-wavelength laser diodes. Long-wavelength (1310nm and greater) laser diodes are typically packaged with their anode connected to a photodetector's cathode.

Refer to the MAX3296EVKIT-SW for evaluation of the MAX3286/MAX3296 with short-wavelength laser diodes and VCSELs.

| DESIGNATION                                 |   QTY | DESCRIPTION                                                             |
|---------------------------------------------|-------|-------------------------------------------------------------------------|
| C6-C10, C15, C16, C21, C27, C28, C29        |    11 | 0.01µF ±10%, 10V min, X7R ceramic capacitors (0402)                     |
| C17                                         |     1 | 0.1µF ±10%, 10V min, X7R ceramic capacitor (0603)                       |
| C18                                         |     0 | Open, user-supplied (0402)*                                             |
| C24                                         |     1 | 10µF ±10%, 16V tantalum capacitor AVX TAJC106K016                       |
| D2                                          |     0 | Open, user-supplied (laser diode and photodiode assembly, see Figure 1) |
| D4                                          |     1 | Red LED                                                                 |
| L3, L6                                      |     2 | Ferrite beads Murata BLM11HA102SG                                       |
| L5                                          |     1 | Ferrite bead (included but not installed) Murata BLM11HA102SG           |
| L7                                          |     1 | Ferrite bead Murata BLM11HA601SG                                        |
| JU6-JU10                                    |     5 | 2-pin headers (0.1in centers) Digi-Key S1012-36-ND                      |
| J9, J10                                     |     2 | Test points Digi-Key 5000K-ND                                           |
| TP5-TP8, TP11, TP12, TP13, TP16, TP17, TP18 |    10 | Test points Digi-Key 5000K-ND                                           |
| R1                                          |     1 | 0 Ω ±5% resistor (0402)                                                 |
| R6                                          |     1 | 115 Ω ±1% resistor (0402)                                               |

- ♦ Drives Common-Anode Lasers
- ♦ Includes Socket for Laser Insertion
- ♦ LED Fault Indicator
- ♦ Evaluates Either MAX3286 or MAX3296 (installed)
- ♦ Adjustable Laser Bias Current
- ♦ Adjustable Laser Modulation Current
- ♦ Adjustable Laser Modulation Current Tempco
- ♦ Configured for Electrical Operation, No Laser Necessary

## Ordering Information

| PART            | TEMP. RANGE   | IC PACKAGE   |
|-----------------|---------------|--------------|
| MAX3296EVKIT-LW | 0°C to +70°C  | 32 TQFP      |
| MAX3296CGIL     | 0°C to +70°C  | 28 QFN       |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                            |
|---------------|-------|------------------------------------------------------------------------|
| R7, R14       |     2 | 100k Ω variable resistors Bourns or Digi-Key 3296W-104-ND              |
| R8            |     1 | 50k Ω variable resistor Bourns or Digi-Key 3296W-503-ND                |
| R15           |     1 | 36 Ω ±5% resistor (0603)                                               |
| R16           |     1 | 18 Ω ±5% resistor (0402)                                               |
| R17           |     1 | 24.9 Ω ±1% (0402)*                                                     |
| R19           |     1 | 49.9 Ω ±1% resistor (0402)                                             |
| R26           |     1 | 511 Ω ±1% resistor (0402)                                              |
| R27           |     1 | 6.8 Ω ±5% resistor (0402)                                              |
| R28           |     1 | 1k Ω ±5% resistor (0402)                                               |
| R29           |     1 | 36 Ω ±5% resistor (0402)                                               |
| J3, J4, J6    |     3 | SMA connectors (edge mount) EFJohnson 142-0701-801 or Digi-Key J502-ND |
| Q5            |     1 | Zetex FMMT591A                                                         |
| Q6            |     1 | Zetex FMMT491A                                                         |
| U3**          |     1 | MAX3296CHJ (32-pin TQFP)                                               |
| U3**          |     1 | MAX3286CHJ (32-pin TQFP, included but not installed)                   |
| U1**          |     1 | MAX3296CGI (28-pin QFN)                                                |
| U1**          |     1 | MAX3286CGI (28-pin QFN, included but not installed)                    |
| U4            |     1 | MAX4322EUK (5-pin SOT23)                                               |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

Features

## MAX3296 Longwave (Common Anode) Evaluation Kit

## Component List (continued)

*These components are part of the compensation network, which reduces overshoot and ringing. Parasitic series inductance introduces a zero into the laser's frequency response.

R17 and C18 add a pole to cancel this zero. The optimal values depend upon the laser used. Maxim recommends R17 = 24.9 Ω and C18 = 2pF as a starting point.

- **The MAX3296/MAX3286CHJ parts are included with the MAX3296EV-KIT-LW. The MAX3296/MAX3286CGI parts are included with the MAX3296CGIL.

## Electrical Quick Start

## Electrical Quick Start with Simulated Photodiode Feedback

- 1) Short shunts SP1 and SP2 to use the photodiode emulator circuitry (see Emulating a Photodiode During Electrical Evaluation ).
- 2) Make sure nothing is installed in the laser socket (Figure 1).
- 3) Confirm that R27 is installed.
- 4) Make sure L5 is not installed.
- 5) Confirm that C18 is open. Since the laser is not installed, no compensation network is required.
- 6) Set potentiometer R14 (RSET) to midscale by turning the screw clockwise until a faint click is felt, then counterclockwise for 15 full revolutions (30 full revolutions in the 0 Ω to  100k Ω range of the multiturn  potentiometer). This sets the regulation point for the simulated photodiode current to 1.7V / 50k Ω = 34µA. The photodiode emulator circuit regulates the DC bias current into Q6 to 28 · 34µA ≅ 1mA.
- 7) Set potentiometer R8 (RMOD) to maximum resistance by turning the screw counterclockwise until a faint  click  is  felt  (30  full  revolutions  in  the  0 Ω to 50k Ω range of the multiturn potentiometer). This minimizes the modulation current.
- 8) Set potentiometer R7 (RTC) to maximum resistance by turning the screw counterclockwise until a faint click  is  felt  (30  full  revolutions  in  the  0 Ω to  100k Ω range of the multiturn potentiometer). This minimizes the temperature coefficient (tempco) of the modulation current.
- 9) Place jumpers across JU7 (EN), JU8 ( EN ), and JU9 (PORDLY).
- 10) If you intend to power the board from a +5V supply, place a jumper across JU6 (LV). Do not apply power yet.
- 11) Make sure there is no jumper on JU10 (FLTDLY). This enables the safety circuitry.
- 12) Attach a cable with 50 Ω characteristic impedance between the J6 SMA output connector and the input of the oscilloscope. Make sure the oscilloscope input is 50 Ω terminated.
- 13) Attach differential sources to SMA connectors J3 and J4. Each source should have a peak-to-peak amplitude between 100mV and 830mV.
- 14) Apply either +3.3V or +5V power to the board at the J9 (VCC) and J10 (GND) test points. Set the current limit to 300mA.
- 15) While monitoring the voltage between TP17 and TP18, adjust R14 (RSET) until the desired DC bias current is obtained. Turning the R14 potentiometer screw counterclockwise increases the DC bias current.
- 16) While monitoring the J6 SMA connector output on the oscilloscope, adjust R8 (RMOD) until the desired modulation current is obtained. Turning the R8 potentiometer screw clockwise increases the modulation current.

## Emulating a Photodiode During Electrical Evaluation

When evaluating the MAX3286/MAX3296 without a laser, the MAX3286/MAX3296 DC bias circuitry operates using a photodiode emulator circuit. When shunts SP1 and SP2 are shorted, U4 (MAX4322), Q5 (FMMT591A), and R28 form a current-controlled current source that emulates the behavior of the photodiode in the laser assembly. R29 takes the place of the laser diode, and the photodiode emulator circuitry sources a current from the collector of Q5 that is a fraction of the current through R29. This simulates the behavior of a laser diode and photodiode assembly where a fraction of the laser light reflects onto the photodiode, which then outputs a small current proportional to the light emitted.

## Optical Quick Start

## Optical Quick Start with Photodiode Feedback

- 1) Make sure SP1 and SP2 are open. This confirms that  the  photodiode emulator circuitry is not connected.
- 2) Remove R27.
- 3) Install L5.
- 4) Connect a laser to the board (Figure 1).
- 5) Set potentiometer R14 (RSET) to midscale by turning the screw clockwise until a faint click is felt, then counterclockwise for 15 full revolutions (30 full revolutions in the 0 Ω to  100k Ω range of the multi-

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3296 Longwave (Common Anode) Evaluation Kit

turn  potentiometer). This sets the regulation point for  the  photodiode current to 1.7V / 50k Ω = 34µA. The resulting laser bias current depends upon the relationship between laser power and photodiode output current. WARNING: Consult your laser data sheet to ensure that 34µA of photodiode monitor current does not correspond to excessive laser power.

- 6) Set potentiometer R8 (RMOD) to maximum resistance by turning the screw counterclockwise until a faint  click  is  felt  (30  full  revolutions  in  the  0 Ω to 50k Ω range of the multiturn potentiometer). This minimizes the modulation current (AC drive applied to laser).
- 7) Set potentiometer R7 (RTC) to maximum resistance by turning the screw counterclockwise until a faint click  is  felt  (30  full  revolutions  in  the  0 Ω to  100k Ω range of the multiturn potentiometer). This minimizes the tempco of the modulation current.
- 9) Place jumpers across JU7 (EN), JU8 ( EN ), and JU9 (PORDLY).
- 10) If you intend to power the board from a +5V supply, place a jumper across JU6 (LV). Do not apply power yet.
- 11) Make sure there is no jumper on JU10 (FLTDLY). This enables the safety circuitry.
- 12) Attach differential sources to SMA connectors J3 and J4. Each source should have a peak-to-peak amplitude between 100mV and 830mV.
- 13) Apply either +3.3V or +5V power to the board at the J9 (VCC) and J10 (GND) test points.
- 14) While monitoring the laser output, adjust R14 (RSET) until  the  desired  laser  bias  current  is  obtained. Turning the R14 potentiometer screw counterclockwise increases the laser bias current.
- 8) Attach a 50 Ω SMA terminator to J6 to match the laser loading.
- 15) While monitoring the laser output, adjust R8 (RMOD) until  the  desired laser modulation current is obtained. Turning the R8 potentiometer screw clockwise increases the laser modulation current.

## Table 1.  Adjustment and Control Descriptions

| COMPONENT   | NAME   | FUNCTION                                                                                                                                                                                                                                                                                                                                       |
|-------------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| D4          | Fault  | The LED shines red when a fault has occurred. The fault condition can be cleared by removing, then reinstalling, jumpers at JU7 or JU8.                                                                                                                                                                                                        |
| JU6         | LV     | Placing a jumper on JU6 connects the LV pin to ground and programs the power-on reset circuit for +4.5V to +5.5V operation.                                                                                                                                                                                                                    |
| JU7         | EN     | Placing a jumper on JU7 ties the EN pin to VCC. When JU7 is not installed, the EN pin is pulled low by its internal pull-down.                                                                                                                                                                                                                 |
| JU8         | EN     | Placing a jumper on JU8 ties the EN pin to ground. When JU8 is not installed, the EN pin is pulled high by its internal pull-up.                                                                                                                                                                                                               |
| JU9         | PORDLY | Placing a jumper on JU9 connects the PORDLY pin to a 0.01µF capacitor (C6). Leaving JU9 open floats the PORDLY pin and minimizes the power-on reset time.                                                                                                                                                                                      |
| JU10        | FLTDLY | Placing a jumper on JU10 disables the laser-driver safety features.                                                                                                                                                                                                                                                                            |
| R7          | R TC   | Potentiometer R7, in conjunction with potentiometer R8 (R MOD ), sets the tempco of the laser modulation current. Turn the potentiometer screw counterclockwise to increase the resistance. The tempco decreases when the potentiometer screw turns counterclockwise.                                                                          |
| R8          | R MOD  | Potentiometer R8, in conjunction with potentiometer R7 (R TC ), sets the peak-to-peak amplitude of the laser modulation current. Turn the potentiometer screw counterclock- wise to increase the resistance. The laser modulation current amplitude decreases when the potentiometer screw turns counterclockwise.                             |
| R14         | R SET  | Potentiometer R14 adjusts the desired laser DC-current bias point. Potentiometer R14 sets the resistance from MD to ground. MD regulates to 1.7V. Turn the potentiometer screw clockwise to increase the resistance. The total range is 0 to 100k Ω . The laser's average power increases when the potentiometer screw turns counterclockwise. |
| SP1, SP2    | -      | Short across these shunts with a bridge of solder when performing electrical evaluation.                                                                                                                                                                                                                                                       |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3296 Longwave (Common Anode) Evaluation Kit

- 16) Look at the 'eye' output on the oscilloscope. Laser overshoot and ringing can be improved by appropriate selection of R17 and C18, as described in the Designing the Laser-Compensation Filter Network section of the MAX3286-MAX3289/MAX3296MAX3299 data sheet.

Figure 1.  Optical Connection Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluating the MAX3286

## TQFP Package

The MAX3296EVKIT-LW board can easily be modified to accommodate the MAX3286. Desolder and remove the MAX3296 (the EV board ships with the MAX3296CHJ installed), and replace it with the MAX3286CHJ (included with the EV kit). No other circuit modifications are necessary.

## QFN Package

The MAX3296CGIL board can be modified to accommodate the MAX3286. Using a hot plate and a small heating block to localize the heat underneath the part, desolder and remove the MAX3296 (the EV board ships with the MAX3296CGI installed), and replace it with the MAX3286CGI (included with the EV kit). No other circuit modifications are necessary.

<!-- image -->

## MAX3296 Longwave (Common Anode) Evaluation Kit

Figure 2.  MAX3296 LW EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5

## MAX3296 Longwave (Common Anode) Evaluation Kit

Figure 3.  MAX3296 LW EV Kit Component Placement GuideTop Silkscreen

<!-- image -->

Figure 4.  MAX3296 LW EV Kit PC Board Layout-Component Side

<!-- image -->

6

Figure 5.  MAX3296 LW EV Kit PC Board Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3296 Longwave (Common Anode) Evaluation Kit

Figure 6.  MAX3296 LW EV Kit PC Board Layout-Power Plane

<!-- image -->

<!-- image -->

Figure 7.  MAX3296 LW EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3296 Longwave (Common Anode) Evaluation Kit

Figure 8. MAX3296CGI LW EV KIT Schematic

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3296 Longwave (Common Anode) Evaluation Kit

<!-- image -->

Figure 9. MAX3296CGI LW EV Kit Component Placement Guide-Top Silkscreen

Figure 10. MAX3296CGI LW EV Kit PC Board LayoutComponent Side

<!-- image -->

<!-- image -->

Figure 11. MAX3296CGI LW EV Kit PC Board Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3296 Longwave (Common Anode) Evaluation Kit

Figure 12. MAX3296CGI LW EV Kit PC Board Layout-Power Plane

<!-- image -->

Figure 13. MAX3296CGI LW EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim makes no warranty, representation or guarantee regarding the suitability of its products for any particular purpose, nor does Maxim assume any liability arising out of the application or use of any product or circuit and specifically disclaims any and all liability, including without limitation consequential or incidental damages. 'Typical' parameters can and do vary in different applications. All operating parameters, including 'typicals' must be validated for each customer application by customer's technical experts. Maxim products are not designed, intended or authorized for use as components in systems intended for surgical implant into the body, or other applications intended to support or sustain life, or for any other application in which the failure of the Maxim product could create a situation where personal injury or death may occur.

<!-- image -->

<!-- image -->